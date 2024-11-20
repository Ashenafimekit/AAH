import Router from 'express';
import {
  createTestimonial,
  getTestimonials,
  getTestimonial,
} from '../controllers/testimonial.controller.js';

const router = Router();

router.post('/testimonial/create', createTestimonial);
router.get('/testimonial/lists', getTestimonials);
router.get('/testimonial/:testimonialId', getTestimonial);

export default router;
