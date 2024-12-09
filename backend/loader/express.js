import httpstatus from 'http-status';
import express from 'express';
import config from '../config/config.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { errorConvertor, errorHandler } from '../middlewares/error.js';
import ApiError from '../utils/ApiError.js';
import roomRouter from '../routes/room.route.js';
import bookingRouter from '../routes/booking.route.js';
import testimonialRouter from '../routes/testimonial.route.js';
import contactRouter from '../routes/contact.route.js';
import userRouter from '../routes/user.route.js';
import imageRouter from '../routes/image.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async (app) => {
  app.use(express.json());
  app.use(cookieParser());
  const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
  };
  if (config.env === 'production') {
    app.use(cors({ origin: url }));
    app.options('*', cors({ origin: url }));
  } else {
    app.use(cors(corsOptions));
  }

  app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));
  app.use(userRouter);
  app.use(roomRouter);
  app.use(bookingRouter);
  app.use(testimonialRouter);
  app.use(contactRouter);
  app.use(imageRouter);

  app.use((req, res, next) => {
    next(new ApiError(httpstatus.NOT_FOUND, 'Not found'));
  });

  app.use(errorConvertor);
  app.use(errorHandler);
};
