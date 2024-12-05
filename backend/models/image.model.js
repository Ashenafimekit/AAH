import { Schema, model } from 'mongoose';

const imageSchema = new Schema({
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
});

const Image = model('Image', imageSchema);

export default Image;
