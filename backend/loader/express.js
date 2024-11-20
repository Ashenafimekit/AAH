import httpstatus from 'http-status';
import express from 'express';
import config from '../config/config.js';
import cors from 'cors';
import { errorConvertor, errorHandler } from '../middlewares/error.js';
import ApiError from '../utils/ApiError.js';

export default async (app) => {
  app.use(express.json());

  if (config.env === 'production') {
    app.use(cors({ origin: url }));
    app.options('*', cors({ origin: url }));
  } else {
    app.use(cors());
    app.options('*', cors());
  }

  //routers

  app.use((req, res, next) => {
    next(new ApiError(httpstatus.NOT_FOUND, 'Not found'));
  });

  app.use(errorConvertor);
  app.use(errorHandler);
};
