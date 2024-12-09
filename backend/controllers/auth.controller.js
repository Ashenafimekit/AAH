import bcrypt from 'bcrypt';
import { User } from '../models/user.model.js';
import tokenService from '../services/token.service.js';
import logger from '../config/logger.js';
import catchAsync from '../utils/catchAsync.js';
import config from '../config/config.js';
import httpStatus from 'http-status';
import ApiError from '../utils/ApiError.js';
import { Token } from '../models/token.model.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ message: 'Invalid email or password' });
    }

    const tokens = await tokenService.generateAuthTokens(user._id);
    res.cookie('access_token', tokens.access.token, {
      httpOnly: true,
      secure: config.env === 'development',
      sameSite: 'Strict',
      maxAge: 15 * 60 * 1000,
    });

    res.cookie('refresh_token', tokens.refresh.token, {
      httpOnly: true,
      secure: config.env === 'development',
      sameSite: 'Strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    logger.info(tokens.access.token);
    logger.info('Login successful');
    return res.status(httpStatus.OK).json({
      success: true,
      message: 'Login successful',
    });
  } catch (error) {
    logger.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const logout = async (req, res) => {
  try {
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Refresh token is required');
    }
    const tokenDoc = await Token.findOne({
      token: refreshToken,
      blacklisted: false,
    });
    if (!tokenDoc) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Token not found');
    }
    tokenDoc.blacklisted = true;
    await tokenDoc.save();
    res.clearCookie('access_token', {
      httpOnly: true,
      secure: config.env === 'development',
      sameSite: 'Strict',
    });
    res.clearCookie('refresh_token', {
      httpOnly: true,
      secure: config.env === 'development',
      sameSite: 'Strict',
    });
    logger.info('Logged out successfully');

    return res
      .status(httpStatus.OK)
      .json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    logger.error('Logout error:', error);
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error',
    );
  }
};

export const checkAuth = async (req, res) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .json({ success: false, message: 'Please Authenticate' });
  }

  try {
    const user = await tokenService.verifyAccessToken(token);
    req.user = user;
    res.status(httpStatus.OK).json({ success: true, message: 'Authenticated' });
  } catch (error) {
    logger.error('Error verifying token', error);
    return res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: 'Invalid token. Please Authenticate again.',
    });
  }
};

export const generateRefreshToken = catchAsync(async (req, res) => {
  const oldRefreshToken = req.cookies.refresh_token;
  if (!oldRefreshToken) {
    return res.status(httpStatus.UNAUTHORIZED).send('Please Authenticate');
  }
  const tokens = await tokenService.refreshAuthToken(oldRefreshToken);
  // res.status(httpStatus.OK).send({ ...tokens });
  res
    .status(httpStatus.OK)
    .json({ success: true, message: 'Refresh Token generated' });
});
