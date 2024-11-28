import httpstatus from 'http-status';
import express from 'express';
import config from '../config/config.js';
import cors from 'cors';
import { errorConvertor, errorHandler } from '../middlewares/error.js';
import ApiError from '../utils/ApiError.js';
import roomRouter from '../routes/room.route.js';
import bookingRouter from '../routes/booking.route.js';
import testimonialRouter from '../routes/testimonial.route.js';
import contactRouter from '../routes/contact.route.js';
import userRouter from '../routes/user.route.js';

export default async (app) => {
  app.use(express.json());

  if (config.env === 'production') {
    app.use(cors({ origin: url }));
    app.options('*', cors({ origin: url }));
  } else {
    app.use(cors());
  }

  //routers
  app.use(userRouter);
  app.use(roomRouter);
  app.use(bookingRouter);
  app.use(testimonialRouter);
  app.use(contactRouter);

  app.use((req, res, next) => {
    next(new ApiError(httpstatus.NOT_FOUND, 'Not found'));
  });

  app.use(errorConvertor);
  app.use(errorHandler);
};
