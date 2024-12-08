import catchAsync from '../utils/catchAsync.js';
import testimonialService from '../services/testimonial.service.js';
import httpstatus from 'http-status';

export const createTestimonial = catchAsync(async (req, res) => {
  const testimonial = await testimonialService.createTestimonial(req.body);
  res
    .status(httpstatus.CREATED)
    .json({ sucess: true, testimonial: testimonial });
});

export const getTestimonials = catchAsync(async (req, res) => {
  const testimonials = await testimonialService.getTestimonials();
  res.status(httpstatus.OK).json({ success: true, testimonials: testimonials });
});

export const getTestimonial = catchAsync(async (req, res) => {
  const testimonial = await testimonialService.getTestimonial(
    req.params.testimonialId,
  );
  res.status(httpstatus.OK).json({ success: true, testimonial });
});

export const approveTestimonial = catchAsync(async (req, res) => {
  const testimonial = await testimonialService.approveTestimonial(
    req.params.testimonialId,
  );
  res.status(httpstatus.OK).json({ success: true, testimonial: testimonial });
});

export const cancelTestimonial = catchAsync(async (req, res) => {
  await testimonialService.cancelTestimonial(req.params.testimonialId);
  res.status(httpstatus.NO_CONTENT).send();
});
