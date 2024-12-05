import { Schema, model } from 'mongoose';

const imageSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  originalName: {
    type: String,
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    enum: ['gym', 'food', 'resturant', 'room'],
    required: true,
  },
});

const Image = model('Image', imageSchema);

export default Image;
