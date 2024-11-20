import mongooseLoader from './mongoose.js';
import expressLoader from './express.js';
import logger from '../config/logger.js';

export default async (app) => {
  await mongooseLoader();
  logger.info('✌️ Mongoose Initiated!');
  await expressLoader(app);
  logger.info('✌️ Express Initiated!');
};
