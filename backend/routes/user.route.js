// routes/userRoutes.js
import express from 'express';
import { login, logout, checkAuth } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.get('/check-auth', checkAuth);

export default router;
