import Router from 'express';
import {
  sendContactMessage,
  getContactMessages,
  deleteMessage,
} from '../controllers/contact.controller.js';

const router = Router();

router.post('/contact/send', sendContactMessage);
router.get('/contact/messages', getContactMessages);
router.delete('/contact/delete/:messageId', deleteMessage);

export default router;
