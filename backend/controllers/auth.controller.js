// controllers/authController.js
import bcrypt from 'bcrypt';
import { User } from '../models/user.model.js';
import tokenService from '../services/token.service.js';
import logger from '../config/logger.js';
import catchAsync from '../utils/catchAsync.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const tokens = await tokenService.generateAuthTokens(user._id);
    res.cookie('refresh_token', tokens.refresh.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,
      message: 'Login successful',
      accessToken: tokens.access.token,
    });
  } catch (error) {
    logger.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const refreshToken = catchAsync(async (req, res) => {
  const tokens = await tokenService.refreshAuthToken(req.body.refreshToken);
  res.status(httpStatus.OK).send({ ...tokens });
});
