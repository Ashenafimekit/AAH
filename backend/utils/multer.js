import multer from 'multer';
import httpStatus from 'http-status';
import ApiError from '../utils/ApiError.js';

export default multer({
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(
        new ApiError(
          httpStatus.BAD_REQUEST,
          'Invalid file type/ please upload an image file',
        ),
      );
    } else {
      cb(null, true);
    }
  },
});
