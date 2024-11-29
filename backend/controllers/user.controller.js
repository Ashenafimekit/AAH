// createAdmin.js (Run once to create the user)
import bcrypt from 'bcryptjs';
import { User } from '../models/user.model.js';
import config from '../config/config.js';
import mongoose from 'mongoose';
import logger from '../config/logger.js';

const createAdmin = async () => {
  const connection = await mongoose.connect(
    'mongodb://localhost:27017/arabAli',
  );
  const email = 'admin@example.com';
  const password = 'admin123';
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ email, password: hashedPassword });

  try {
    await user.save();
    logger.info('Admin user created:', email);
  } catch (error) {
    logger.error('Error creating admin:', error);
  } finally {
    mongoose.connection.close();
  }
};

createAdmin();