// routes/userRoutes.js
import express from 'express';
import { login, logout, checkAuth } from '../controllers/auth.controller.js';
import { changePassword } from '../controllers/user.controller.js';
import { authenticateUser } from '../middlewares/authenticateUser.js';

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.get('/check-auth', checkAuth);
router.post('/changePassword', authenticateUser, changePassword);

export default router;
