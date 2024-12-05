import httpStatus from 'http-status';
import ApiError from '../utils/ApiError.js';
import Image from '../models/image.model.js';
import processImage from '../utils/sharp.js';
import logger from '../config/logger.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadImage = async (files, category) => {
  const images = [];

  for (const file of files) {
    const fileName = `image-${Date.now()}.webp`;
    const imageUrl = `/uploads/images/${fileName}`;
    await processImage(file.buffer, fileName);
    const image = await Image.create({
      url: imageUrl,
      fileName,
      originalName: file.originalname,
      category,
    });
    images.push(image);
  }

  return images;
};

const getAllImages = async (page = 1, limit = 10, category) => {
  const skip = (parseInt(page) - 1) * parseInt(limit);
  let query = {};
  if (category && category !== 'all') {
    query.category = category;
  }
  const images = await Image.find(query)
    .sort({ uploadedAt: -1 })
    .skip(skip)
    .limit(parseInt(limit));
  const totalImages = await Image.countDocuments(query);
  return {
    images,
    totalImages,
    totalPages: Math.ceil(totalImages / limit),
    currentPage: page,
  };
};

export default { uploadImage, getAllImages };
