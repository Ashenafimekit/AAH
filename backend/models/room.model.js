import { Schema, model } from 'mongoose';

const roomSchema = new Schema({
  roomType: {
    type: String,
    enum: ['Single', 'King', 'Twin'],
  },
  roomNumber: {
    type: Number,
    requried: true,
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
    enum: ['available', 'taken', 'pending'],
    default: 'available',
    required: true,
  },
});

export default model('Room', roomSchema);
