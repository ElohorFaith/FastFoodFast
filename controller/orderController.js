import orders from '../models/orders';

// get orders

const getOrders = (req, res) => res.send({
  orders,
});

export default getOrders;
