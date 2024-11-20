import Router from 'express';
import {
  createBooking,
  getBookings,
  getBooking,
  updateBooking,
  deleteBooking,
} from '../controllers/booking.controller.js';

const router = Router();

router.post('/book', createBooking);
router.get('/book/list', getBookings);
router.get('/book/list/:bookingId', getBooking);
router.put('/book/update/:bookingId', updateBooking);
router.delete('/book/delete/:bookingId', deleteBooking);

export default router;
