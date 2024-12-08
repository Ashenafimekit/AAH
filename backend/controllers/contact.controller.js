import catchAsync from '../utils/catchAsync.js';
import contactService from '../services/contact.service.js';
import httpstatus from 'http-status';
import logger from '../config/logger.js';

export const sendContactMessage = catchAsync(async (req, res) => {
  logger.info('Sending contact...');
  await contactService.createContactMessage(req.body);
  await contactService.sendMessage(req.body);
  res.status(httpstatus.OK).json({
    sucess: true,
    message: 'message sent successfully!',
  });
});

export const getContactMessages = catchAsync(async (req, res) => {
  const messages = await contactService.getMessages();
  res.status(httpstatus.OK).json({ success: true, lists: messages });
});

export const deleteMessage = catchAsync(async (req, res) => {
  const messages = await contactService.deleteMessage(req.params.messageId);
  res.status(httpstatus.OK).json({ success: true, updatedMessage: messages });
});
