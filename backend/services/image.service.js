import httpStatus from 'http-status';
import ApiError from '../utils/ApiError.js';
import Image from '../models/image.model.js';
import processImage from '../utils/sharp.js';
import logger from '../config/logger.js';

const uploadImage = async (files) => {
  const images = [];

  for (const file of files) {
    const fileName = `image-${Date.now()}.webp`;
    await processImage(file.buffer, fileName);
    const image = await Image.create({
      fileName,
      originalName: file.originalname,
    });
    images.push(image);
  }

  return images;
};

const getAllImages = async (page = 1, limit = 10) => {
  const skip = (page - 1) * 10;
  const images = await Image.find()
    .sort({ uploadedAt: -1 })
    .skip(skip)
    .limit(limit);
  const totalImages = await Image.countDocuments();
  return {
    images,
    totalImages,
    totalPages: Math.ceil(totalImages / limit),
    currentPage: page,
  };
};

export default { uploadImage, getAllImages };
