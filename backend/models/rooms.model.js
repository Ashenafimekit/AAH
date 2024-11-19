import { Schema, model } from 'mongoose';

const roomSchema = new Schema({
  roomType: {
    type: String,
    enum: ['Single', 'Double', 'Queen', 'King', 'Suite'],
  },
  beds: {
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
});

export default model('Room', roomSchema);
