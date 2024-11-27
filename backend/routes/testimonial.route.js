import Router from 'express';
import {
  createTestimonial,
  getTestimonials,
  getTestimonial,
  approveTestimonial,
  cancelTestimonial,
} from '../controllers/testimonial.controller.js';

const router = Router();

router.post('/testimonial/create', createTestimonial);
router.get('/testimonial/lists', getTestimonials);
router.get('/testimonial/:testimonialId', getTestimonial);
router.put('/testimonial/approve/:testimonialId', approveTestimonial);
router.delete('/testimonial/cancel/:testimonialId', cancelTestimonial);

export default router;
