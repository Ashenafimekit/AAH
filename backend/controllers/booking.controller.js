import catchAsync from '../utils/catchAsync.js';
import bookingService from '../services/booking.service.js';
import httpstatus from 'http-status';
import logger from '../config/logger.js';

export const createBooking = catchAsync(async (req, res) => {
  const booking = await bookingService.createBooking(req.body);
  logger.info(booking);
  logger.info('booked successfully');
  res.status(httpstatus.CREATED).json({ success: true, bookingData: booking });
});

export const getBookings = catchAsync(async (req, res) => {
  const bookings = await bookingService.getBookings();
  res.status(httpstatus.OK).json({ success: true, lists: bookings });
});

export const getBooking = catchAsync(async (req, res) => {
  const booking = await bookingService.getBooking(req.params.bookingId);
  res.status(httpstatus.OK).json({ success: true, list: booking });
});

export const updateBooking = catchAsync(async (req, res) => {
  const booking = await bookingService.updateBooking(
    req.params.bookingId,
    req.body,
  );
  res.status(httpstatus.OK).json({ success: true, updatedData: booking });
});

export const deleteBooking = catchAsync(async (req, res) => {
  await bookingService.deleteBooking(req.params.bookingId);
  res.status(httpstatus.NO_CONTENT).send();
});
