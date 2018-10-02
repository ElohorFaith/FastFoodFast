import express from 'express';
import authent from '../middleware/Authent';
import user from '../controllers/usersController';

const router = express.Router();

router.post('/auth/signup', user.signup);

router.post('/auth/login', user.signin);


export default router;
