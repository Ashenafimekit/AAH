import Router from 'express';
import {
  sendContactMessage,
  getContactMessages,
} from '../controllers/contact.controller.js';

const router = Router();

router.post('/contact/send', sendContactMessage);
router.get('/contact/messages', getContactMessages);

export default router;
