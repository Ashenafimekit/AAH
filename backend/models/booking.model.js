import { Schema, model } from 'mongoose';

const bookingSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: 'Room',
    required: false,
  },
  chekInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
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
});

export default model('Booking', bookingSchema);
