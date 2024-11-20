import ApiError from '../utils/ApiError.js';
import httpStatus from 'http-status';
import Testimonial from '../models/testimonial.model.js';

const createTestimonial = async (testimonialData) => {
  try {
    const testimonial = await Testimonial.create(testimonialData);
    return testimonial;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, error.message);
  }
};

const getTestimonials = async () => {
  try {
    const testimonials = await Testimonial.find();
    return testimonials;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, error.message);
  }
};

const getTestimonial = async (testimonialId) => {
  try {
    const testimonial = await Testimonial.findById(testimonialId);
    if (!testimonial) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Testimonial not found');
    }
    return testimonial;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, error.message);
  }
};

export default { createTestimonial, getTestimonials, getTestimonial };
