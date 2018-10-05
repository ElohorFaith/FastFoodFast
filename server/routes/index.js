import express from 'express';
import Auth from '../middleware/Auth';
import user from '../controllers/usersController';
import menuController from '../controllers/menuController';
import checkMenuInput from '../middleware/menuInput';
import checkOrderInput from '../middleware/orderInput';
import orderController from '../controllers/orderController';


const router = express.Router();

router.post('/auth/signup', user.signup);

router.post('/auth/login', user.signin);

router.post('/menu', Auth.isAdmin, checkMenuInput, menuController.createMenu);

router.get('/menu', menuController.getMenu);

router.post('/orders', Auth.isTokenValid, checkOrderInput, orderController.createOrder);

router.get('/orders', Auth.isTokenValid, orderController.getOrders);

router.get('/orders/:id', Auth.isTokenValid, orderController.getOneOrder);

export default router;
