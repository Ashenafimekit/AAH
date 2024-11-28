import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import { tokenTypes } from '../config/token.js';
import { Token } from '../models/token.model.js';
import dayjs from 'dayjs';
import httpStatus from 'http-status';

/**
 * Generate a JWT token.
 *
 * @param {ObjectId} userId - The ID of the user for whom the token is generated.
 * @param {dayjs.Dayjs} expires - The expiration date of the token.
 * @param {string} type - The type of the token (e.g., access, refresh).
 * @param {string} [secret=config.jwt.secretKey] - The secret key to sign the token.
 * @returns {string} - The signed JWT token.
 */
const generateToken = (
  userId,
  expires,
  type,
  secret = config.jwt.secretKey,
) => {
  const payLoad = {
    subject: userId,
    issueDate: dayjs().unix(),
    expTime: expires.unix,
    type,
  };

  return jwt.sign(payLoad, secret);
};

const saveToken = async (token, userId, expires, type, blacklisted = false) => {
  const tokenDoc = Token.create({
    token,
    user: userId,
    expires: expires.toDate(),
    type,
    blacklisted,
  });

  return tokenDoc;
};

/**
 * Generate both access and refresh tokens for authentication.
 *
 * @param {ObjectId} userId - The ID of the user for whom the tokens are generated.
 * @returns {Promise<Object>} - An object containing the access and refresh tokens and their expiration dates.
 */
const generateAuthTokens = async (userId) => {
  const accessTokenExpires = dayjs().add(
    config.jwt.accessTokenMinutes,
    'minute',
  );

  const accessToken = generateToken(
    userId,
    accessTokenExpires,
    tokenTypes.ACCESS,
  );

  const refreshTokenExpires = dayjs().add(config.jwt.refreshTokenDays, 'days');
  const refreshToken = generateToken(
    userId,
    refreshTokenExpires,
    tokenTypes.REFRESH,
  );

  await saveToken(
    refreshToken,
    userId,
    refreshTokenExpires,
    tokenTypes.REFRESH,
  );

  return {
    access: {
      token: accessToken,
      expires: accessTokenExpires,
    },
    refresh: {
      token: refreshToken,
      expires: refreshTokenExpires,
    },
  };
};

export const getUserById = async (id) => {
  return await User.findById(id);
};

const verifyToken = async (token, type) => {
  const payLoad = jwt.verify(token, config.jwt.secretKey); // Decode and verify the token using the secret key
  const tokenDoc = await Token.findOne({
    token,
    user: payLoad.subject, // The 'subject' field contains the user ID
    type,
    blacklisted: false, // Ensure the token is not blacklisted
  });

  if (!tokenDoc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Token not found');
  }
  return tokenDoc;
};

export const refreshAuthToken = async (refreshToken) => {
  try {
    const refreshTokenDoc = await verifyToken(refreshToken, tokenTypes.REFRESH);
    const user = await getUserById(refreshTokenDoc.user);
    if (!user) {
      throw new Error();
    }
    await refreshTokenDoc.deleteOne();
    return tokenService.generateAuthTokens(user.id);
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate');
  }
};

export default { generateAuthTokens, generateToken };
