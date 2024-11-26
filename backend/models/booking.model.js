import { Schema, model } from 'mongoose';

const bookingSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: 'Room',
    required: true,
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  durationOfStay: {
    type: Number,
    required: false,
  },
  NumberOfRoom: {
    type: Number,
    required: true,
  },
  Adults: {
    type: Number,
    required: true,
  },
  children: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  identificationCardNumber: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  tinNumber: {
    type: String,
    required: false,
  },
  Nationality: {
    type: String,
    required: false,
  },
});

export default model('Booking', bookingSchema);
