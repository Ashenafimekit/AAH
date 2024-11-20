import Router from 'express';
import { sendContactMessage } from '../controllers/contact.controller.js';

const router = Router();

router.post('/contact/send', sendContactMessage);

export default router;
