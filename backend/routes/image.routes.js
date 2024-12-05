import express from 'express';
import { uploadImage, getAllImages } from '../controllers/image.controller.js';
import multer from '../utils/multer.js';

const router = express.Router();

router.post('/upload', multer.array('images', 10), uploadImage);
router.get('/gallery', getAllImages);

export default router;
