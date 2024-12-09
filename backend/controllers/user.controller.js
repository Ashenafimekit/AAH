import bcrypt from 'bcryptjs';
import { User } from '../models/user.model.js';
import config from '../config/config.js';
import mongoose from 'mongoose';
import logger from '../config/logger.js';
import catchAsync from '../utils/catchAsync.js';
import httpStatus from 'http-status';
import userService from '../services/user.service.js';

export const createAdmin = async () => {
  const existingAdmin = await User.findOne({ email: 'admin@example.com' });
  if (existingAdmin) {
    // console.log("admin already created")
    return;
  }
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

export const changePassword = catchAsync(async (req, res) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;
  const userId = req.user._id;

  const accessToken = await userService.changePassword(
    { oldPassword, newPassword, confirmPassword },
    userId,
  );

  res.status(httpStatus.OK).json({
    success: true,
    message: 'Password changed successfully',
    accessToken,
  });
});

createAdmin();
