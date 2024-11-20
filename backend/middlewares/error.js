import mongoose from 'mongoose';
import config from '../config/config.js';
import httpstatus from 'http-status';
import logger from '../config/logger.js';
import ApiError from '../utils/ApiError.js';

export const errorConvertor = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error
        ? httpstatus.BAD_REQUEST
        : httpstatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpstatus[statusCode];
    error = new ApiError(statusCode, message, false, error.stack);
  }
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;
  if (config.env === 'production' && !err.isOprational) {
    (statusCode = httpstatus.INTERNAL_SERVER_ERROR),
      (message = httpstatus[statusCode]);
  }

  const response = {
    error: true,
    code: statusCode,
    message: message,
    ...(config.env === 'development' && { stack: err.stack }),
  };

  res.locals.errorMessage = err.message;
  if (config.env === 'development') {
    logger.error(err);
  }
  res.status(statusCode).json(response);
};
