import ApiError from '../utils/ApiError.js';
import Booking from '../models/booking.model.js';
import Room from '../models/room.model.js';
import httpStatus from 'http-status';
import logger from '../config/logger.js';
import dayjs from 'dayjs';

let clients = [];
const sendNewBookingCreatedEvent = async (req, res) => {
  //set headers for server-sent events
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  //add new connection to clients array
  const newClient = {
    id: Date.now(),
    res,
  };
  clients.push(newClient);

  //remove client when connection closes
  req.on('close', () => {
    clients = clients.filter((client) => client.id !== newClient.id);
    res.end();
  });
};

const sendBookingUpdates = (newBooking) => {
  clients.forEach((client) => {
    client.res.write(`data: ${JSON.stringify(newBooking)}\n\n`);
  });
  logger.info('booking updates sent');
};

const createBooking = async (bookingData) => {
  try {
    const checkInDate = new Date(bookingData.checkInDate);
    const checkOutDate = new Date(bookingData.checkOutDate);
    const formattedCheckInDate = dayjs(checkInDate).format('MM/DD/YY');
    const formattedCheckOutDate = dayjs(checkOutDate).format('MM/DD/YY');

    if (checkOutDate <= checkInDate) {
      throw new ApiError(400, 'Check-out date must be after check-in date');
    }
    const durationOfStayInDays = Math.ceil(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24),
    );
    bookingData.formattedCheckInDate = formattedCheckInDate;
    bookingData.formattedCheckOutDate = formattedCheckOutDate;
    bookingData.durationOfStayInDays = durationOfStayInDays;

    const newBooking = await Booking.create(bookingData);
    sendBookingUpdates(newBooking);
    return newBooking;
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

const updateBookingStatus = async (bookingId, status) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { status },
      { new: true },
    );
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
  updateBookingStatus,
  sendNewBookingCreatedEvent,
};
