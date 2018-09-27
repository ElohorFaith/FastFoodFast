import express from 'express';
import orderController from '../controllers/orderController';
import validateUserSignup from '../controllers/validateUserSignup';

const router = express.Router();

// create users
router.post('/auth/signup', validateUserSignup.signup);


// get order request
router.get('/orders', orderController.getOrders);

// get one order
router.get('/orders/:id', orderController.getOneOrder);

// create order
router.post('/orders', orderController.createOrder);

// edit an order
router.put('/orders/:id', orderController.editAnOrder);


export default router;
