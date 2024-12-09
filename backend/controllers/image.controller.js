import httpStatus from 'http-status';
import ApiError from '../utils/ApiError.js';
import catchAsync from '../utils/catchAsync.js';
import imageService from '../services/image.service.js';
import logger from '../config/logger.js';

export const uploadImage = catchAsync(async (req, res) => {
  if (!req.files || !req.files.length) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'No files uploaded');
  }
  logger.info('uploading...');
  const images = await imageService.uploadImage(req.files, req.body.category);
  logger.info('uploaded');
  res.status(httpStatus.CREATED).json({
    success: true,
    message: 'Images uploaded successfully',
    data: images,
  });
});

export const getAllImages = catchAsync(async (req, res) => {
  const { category, page = 1, limit = 10 } = req.query;
  const result = await imageService.getAllImages(page, limit, category);
  logger.info('image retrieved successfully');
  res.status(httpStatus.OK).json({
    message: 'Images retrieved successfully',
    images: result.images,
    pagination: {
      totalImages: result.totalImages,
      totalPages: result.totalPages,
      currentPage: result.currentPage,
    },
  });
});
