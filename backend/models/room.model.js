import { Schema, model } from 'mongoose';

const roomSchema = new Schema({
  roomType: {
    type: String,
    enum: ['Single', 'King', 'Twin'],
  },
  roomNo: {
    type: Number,
    requried: false,
  },
  numberOfBeds: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['available', 'booked'],
    default: 'available',
    required: true,
  },
});

export default model('Room', roomSchema);
