import express from 'express';
import http from 'http';
import loader from './loader/index.js';
import config from './config/config.js';
import logger from './config/logger.js';
import { handlebars } from './loader/handlebars.js';
import ApiError from './utils/ApiError.js';
import httpStatus from 'http-status';
import { createAdmin } from './controllers/user.controller.js';

function exitHandler(server) {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
}

function unExpectedHandler(server) {
  return function (error) {
    logger.error(error);
    exitHandler(server);
  };
}
const startServer = async () => {
  const app = express();
  await loader(app);
  await handlebars(app);
  await createAdmin();

  const server = http.createServer(app).listen(config.port, () => {
    logger.info(`Server is running on port ${config.port}`);
  });

  process.on('uncaughtException', unExpectedHandler(server));
  process.on('unhandledRejection', unExpectedHandler(server));
  process.on('SIGTERM', () => {
    logger.info('SIGTERM received');
    if (server) {
      server.close();
    }
  });
};

(async () => {
  try {
    await startServer();
  } catch (error) {
    // process.exit(1);
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'internal server error',
    );
  }
})();
