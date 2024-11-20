import catchAsync from '../utils/catchAsync.js';
import contactService from '../services/contact.service.js';
import httpstatus from 'http-status';
import logger from '../config/logger.js';

export const sendContactMessage = catchAsync(async (req, res) => {
  logger.info('Sending contact...');
  await contactService.sendMessage(req.body);
  res.status(httpstatus.OK).json({
    sucess: true,
    message: 'message sent successfully!',
  });
});
