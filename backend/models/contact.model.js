import { Schema, model } from 'mongoose';

const contactSchema = new Schema({
  Name: {
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
});

export default model('Contact', contactSchema);
