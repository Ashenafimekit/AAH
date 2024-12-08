import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync.js';
import tokenService from '../services/token.service.js';
import logger from '../config/logger.js';
import config from '../config/config.js';

export const authenticateUser = catchAsync(async (req, res, next) => {
  try {
    const accessToken = req.cookies.access_token;
    const user = await tokenService.verifyAccessToken(accessToken);
    if (!user) {
      return res.status(httpStatus.UNAUTHORIZED).send('Please Authenticate');
    }
    logger.info('User authenticated');
    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      logger.info('Token expired');
      try {
        const oldRefreshToken = req.cookies.refresh_token;
        if (!oldRefreshToken) {
          return res
            .status(httpStatus.UNAUTHORIZED)
            .send('Please Authenticate');
        }
        const tokens = await tokenService.refreshAuthToken(oldRefreshToken);
        res.cookie('access_token', tokens.access.token, {
          httpOnly: true,
          secure: config.env === 'development',
          sameSite: 'Strict',
          maxAge: 15 * 60 * 1000, // 15 minutes
        });

        res.cookie('refresh_token', tokens.refresh.token, {
          httpOnly: true,
          secure: config.env === 'development',
          sameSite: 'Strict',
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
        req.user = await tokenService.verifyAccessToken(tokens.access.token);
        next();
      } catch (refreshError) {
        return res.status(httpStatus.UNAUTHORIZED).send('Please Authenticate');
      }
    } else {
      return res.status(httpStatus.UNAUTHORIZED).send('Please Authenticate');
    }
  }
});
