import { Schema, model } from 'mongoose';

const testimonialSchema = new Schema({
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
    }
});

export default model('Testimonial', testimonialSchema);