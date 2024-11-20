import { google } from 'googleapis';
import logger from '../config/logger.js';
import config from '../config/config.js';
import ApiError from '../utils/ApiError.js';
import httpStatus from 'http-status';

const oAuth2Client = new google.auth.OAuth2(
  config.clientId,
  config.clientSecret,
  config.redirectUri,
);

oAuth2Client.setCredentials({ refresh_token: config.refreshToken });

export const getAccessToken = async () => {
  try {
    const response = await oAuth2Client.getAccessToken();
    if (!response || !response.token) {
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        'Failed to get access token',
      );
    }
    return response.token;
  } catch (error) {
    logger.error('Error while getting access token: ', error);
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Failed to get access token',
    );
  }
};
