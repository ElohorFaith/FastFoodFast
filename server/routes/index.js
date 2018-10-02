import express from 'express';
import authent from '../middleware/Authent';
import user from '../controllers/usersController';
import menuController from '../controllers/menuController';
import checkMenuInput from '../middleware/menuInput';

const router = express.Router();

router.post('/auth/signup', user.signup);

router.post('/auth/login', user.signin);

router.post('/menu', checkMenuInput, menuController.createMenu);

router.get('/menu', checkMenuInput, menuController.getMenu);


export default router;
