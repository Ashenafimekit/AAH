import { Schema, model } from 'mongoose';

const bookingSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  roomType: {
    type: String,
    required: false,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  formattedCheckInDate: {
    type: String,
    required: true,
  },
  formattedCheckOutDate: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: false,
  },
  roomNo: {
    type: Number,
    required: true,
  },
  Adults: {
    type: Number,
    required: false,
  },
  children: {
    type: Number,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
  id: {
    type: String,
    required: false,
  },
  mobile: {
    type: String,
    required: true,
  },
  tinNo: {
    type: String,
    required: false,
  },
  nationality: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'checkedIn', 'checkedOut'],
    default: 'pending',
    required: true,
  },
});

export default model('Booking', bookingSchema);
