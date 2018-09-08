import orders from '../models/orders';

// get all orders
const getOrders = (req, res) => res.send({
  orders,
});

// get one order
const getOneOrder = (req, res) => {
  const singleOrder = orders.find(order => order.id === parseInt(req.params.id, 10));
  if (!singleOrder) res.status(404).send('The order with the given Id is not found.');
  res.send(singleOrder);
};
export default {
  getOrders,
  getOneOrder,
};
