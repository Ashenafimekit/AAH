import mongoose from 'mongoose';
import config from './../config/config.js';
import ApiError from '../utils/ApiError.js';
import httpStatus from 'http-status';
import logger from '../config/logger.js';

export default async () => {
  try {
    const connection = await mongoose.connect(config.dbUri);
    return connection;
  } catch (error) {
    logger.error('Mongoose connection error:', error);
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'internal server error',
    );
  }
};
