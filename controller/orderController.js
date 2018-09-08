import orders from '../models/orders';

// get all orders
const getOrders = (req, res) => res.send({
  orders,
  message: 'fetch all orders request is successful',

});

// get one order
const getOneOrder = (req, res) => {
  const singleOrder = orders.find(order => order.id === parseInt(req.params.id, 10));
  if (!singleOrder) {
    res.status(404).send({
      error: 'The order with the given Id is not found.',
    });
  }
  res.send({
    order: singleOrder,
    message: 'fetch an order request is successful',
  });
};

// create order
const createOrder = (req, res) => {
  const order = {
    id: orders.length + 1,
    name: req.body.name,
    price: req.body.price,
    status: req.body.status,
    date: req.body.date,
  };
  return res.send({
    newOrder: order,
    message: 'Order created successfully',
  });
};

export default {
  getOrders,
  getOneOrder,
  createOrder,
};
