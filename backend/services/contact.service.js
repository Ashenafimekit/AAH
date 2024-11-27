import { createTransport } from 'nodemailer';
import { getAccessToken } from '../utils/oAuth.js';
import config from '../config/config.js';
import ApiError from '../utils/ApiError.js';
import httpStatus from 'http-status';
import logger from '../config/logger.js';
import path from 'path';
import { fileURLToPath } from 'url';
import exphbs from 'express-handlebars';
import Contact from '../models/contact.model.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createContactMessage = async (reqBody) => {
  try {
    const { fullName, email, message } = reqBody;
    const contact = await Contact.create({
      fullName,
      email,
      message,
    });
    return contact;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error);
  }
};

const sendMessage = async (reqBody) => {
  try {
    const { fullName, email, message } = reqBody;

    // Set up Handlebars rendering
    // Set up Handlebars rendering with layout
    const hbs = exphbs.create({
      extname: '.handlebars',
      defaultLayout: 'main', // Use the default layout
      layoutsDir: path.join(__dirname, '..', 'templates', 'layouts'),
    });
    const emailTemplatePath = path.join(
      __dirname,
      '../templates/emails/contactEmail.handlebars',
    );
    logger.info('here');
    const emailHtml = await hbs.render(emailTemplatePath, {
      fullName,
      email,
      message,
      layout: 'main',
    });
    const accessToken = await getAccessToken();
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: config.senderEmail,
        clientId: config.clientId,
        clientSecret: config.clientSecret,
        refreshToken: config.refreshToken,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: config.senderEmail,
      to: 'wizdevaxo.06464@gmail.com',
      subject: `Contact message from ${fullName}`,
      text: 'hello',
      html: emailHtml,
      replyTo: email,
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error sending email');
  }
};

const getMessages = async () => {
  try {
    const messages = await Contact.find();
    return messages;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Error fetching messages',
    );
  }
};

export default { createContactMessage, getMessages, sendMessage };
