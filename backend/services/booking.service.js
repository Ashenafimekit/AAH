import ApiError from '../utils/ApiError.js';
import Booking from '../models/booking.model.js';
import Room from '../models/room.model.js';
import httpStatus from 'http-status';

const createBooking = async (bookingData) => {
  try {
    const room = await Room.findById(bookingData.room);
    if (!room) {
      throw new ApiError(404, 'Room not found');
    }
    const booking = await Booking.create(bookingData);
    return booking;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, error.message);
  }
};

const getBookings = async () => {
  try {
    const bookings = await Booking.find();
    return bookings;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, error.message);
  }
};

const getBooking = async (bookingId) => {
  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      throw new ApiError(404, 'Booking not found');
    }
    return booking;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, error.message);
  }
};

const updateBooking = async (bookingId, updateData) => {
  try {
    const booking = await Booking.findByIdAndUpdate(bookingId, updateData, {
      new: true,
    });
    if (!booking) {
      throw new ApiError(404, 'Booking not found');
    }
    return booking;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, error.message);
  }
};

const deleteBooking = async (bookingId) => {
  try {
    const booking = await Booking.findByIdAndDelete(bookingId);
    if (!booking) {
      throw new ApiError(404, 'Booking not found');
    }
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, error.message);
  }
};

export default {
  createBooking,
  getBookings,
  getBooking,
  updateBooking,
  deleteBooking,
};
