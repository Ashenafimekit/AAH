import httpStatus from 'http-status';
import ApiError from '../utils/ApiError.js';
import catchAsync from '../utils/catchAsync.js';
import imageService from '../services/image.service.js';

export const uploadImage = catchAsync(async (req, res) => {
  if (!req.files || !req.files.length) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'No files uploaded');
  }
  const images = await imageService.uploadImage(req.files);
  res.status(httpStatus.CREATED).json({
    sucess: true,
    message: 'Images uploaded successfully',
    data: images,
  });
});

export const getAllImages = catchAsync(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const result = await imageService.getAllImages(page, limit);
  res.status(httpStatus.OK).json({
    message: 'Images retrieved successfully',
    data: result.images,
    pagination: {
      totalImages: result.totalImages,
      totalPages: result.totalPages,
      currentPage: result.currentPage,
    },
  });
});
