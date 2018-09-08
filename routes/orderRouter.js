import express from 'express';
import orderController from '../controller/orderController';

const router = express.Router();

// get order request
router.get('/orders', orderController.getOrders);

// get one order
router.get('/orders/:id', orderController.getOneOrder);

// create order
router.post('/orders', orderController.createOrder);

// edit an order
router.put('/orders/:id', orderController.editAnOrder);

export default router;
