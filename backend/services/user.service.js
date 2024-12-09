import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import logger from '../config/logger.js';

export const changePassword = async (
  { oldPassword, newPassword, confirmPassword },
  userId,
) => {
  if (!oldPassword || !newPassword || !confirmPassword) {
    throw new Error('All fields are required');
  }

  if (newPassword !== confirmPassword) {
    throw new Error('New password and confirmation do not match');
  }

  if (newPassword.length < 8) {
    throw new Error('Password must be at least 8 characters long');
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid old password');
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  await user.save();

  const accessToken = jwt.sign({ userId: user._id }, config.jwt.secretKey, {
    expiresIn: '30m',
  });

  return accessToken;
};

export default { changePassword };
