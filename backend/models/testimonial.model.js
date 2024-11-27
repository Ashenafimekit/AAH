import { Schema, model } from 'mongoose';

const testimonialSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['approved', 'pending'],
    default: 'pending',
    required: true,
  },
});

export default model('Testimonial', testimonialSchema);
