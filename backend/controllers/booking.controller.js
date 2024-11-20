import catchAsync from '../utils/catchAsync.js';
import bookingService from '../services/booking.service.js';
import httpstatus from 'http-status';

export const createBooking = catchAsync(async (req, res) => {
  const booking = await bookingService.createBooking(req.body);
  res.status(httpstatus.CREATED).json({ booking });
});

export const getBookings = catchAsync(async (req, res) => {
  const bookings = await bookingService.getBookings();
  res.status(httpstatus.OK).json({ bookings });
});

export const getBooking = catchAsync(async (req, res) => {
  const booking = await bookingService.getBooking(req.params.bookingId);
  res.status(httpstatus.OK).json({ booking });
});

export const updateBooking = catchAsync(async (req, res) => {
  const booking = await bookingService.updateBooking(
    req.params.bookingId,
    req.body,
  );
  res.status(httpstatus.OK).json({ booking });
});

export const deleteBooking = catchAsync(async (req, res) => {
  await bookingService.deleteBooking(req.params.bookingId);
  res.status(httpstatus.NO_CONTENT).send();
});
