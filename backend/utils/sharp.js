import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';
import ApiError from './ApiError.js';
import httpStatus from 'http-status';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const processImage = async (input, fileName) => {
  const uploadDir = path.join(__dirname, '../../uploads/images');
  const outPutPath = path.join(uploadDir, fileName);
  try {
    await fs.mkdir(uploadDir, { recursive: true });
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Error creating directory',
    );
  }
  sharp(input).resize(600).webp({ lossless: true }).toFile(outPutPath);
};

export default processImage;
