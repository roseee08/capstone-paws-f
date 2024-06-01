import express from 'express';
import { register, login, changePassword, forgetPassword, resetPassword } from '../controllers/authController.js';
import { authenticateToken } from '../middlewares/middleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/change-password', authenticateToken, changePassword);
router.post('/forget-password', forgetPassword);
router.post('/reset-password', resetPassword);

export default router;
