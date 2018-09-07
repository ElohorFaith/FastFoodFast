import express from 'express';
import getOrders from '../controller/orderController';


const router = express.Router();

//get order request
router.get('/orders', getOrders);


export default router;
