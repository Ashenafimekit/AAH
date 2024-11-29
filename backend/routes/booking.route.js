import Router from 'express';
import {
  createBooking,
  getBookings,
  getBooking,
  updateBooking,
  deleteBooking,
  updateBookingStatus,
  sendNewBookingCreatedEvent,
} from '../controllers/booking.controller.js';

const router = Router();

router.post('/book', createBooking);
router.get('/book/list', getBookings);
router.get('/book/list/:bookingId', getBooking);
router.put('/book/update/:bookingId', updateBooking);
router.put('/update/status/:bookingId', updateBookingStatus);
router.delete('/book/delete/:bookingId', deleteBooking);
router.get('/events', sendNewBookingCreatedEvent);

export default router;
