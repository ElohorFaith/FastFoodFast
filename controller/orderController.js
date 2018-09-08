import orders from '../models/orders';

// get all orders
const getOrders = (req, res) => res.status(200).send({
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
  res.status(200).send({
    order: singleOrder,
    message: 'fetch an order request is successful',
  });
};

// create order
const createOrder = (req, res) => {
  if (!req.body.name || !req.body.price || !req.body.status || !req.body.date) {
    return {
      error: 'Fil in the required fields',
    };
  }
  const order = {
    id: orders.length + 1,
    name: req.body.name,
    price: req.body.price,
    status: req.body.status,
    date: req.body.date,
  };
  return res.status(201).send({
    newOrder: order,
    message: 'Order created successfully',
  });
};

// edit an order
const editAnOrder = (req, res) => {
  // first get the order you want to edit by the id
  const singleOrder = orders.find(order => order.id === parseInt(req.params.id, 10));
  if (!singleOrder) {
    res.status(404).send({
      error: 'The order with the given Id is not found.',
    });
  }

  // edit the order
  const updatedOrder = {
    id: singleOrder.id,
    name: req.body.name || singleOrder.name,
    price: req.body.price || singleOrder.price,
    date: req.body.date || singleOrder.date,
    status: req.body.status || singleOrder.status,
  };

  // return the edited order
  return res.status(200).send({
    updatedOrder,
    message: 'order update successful',
  });
};

export default {
  getOrders,
  getOneOrder,
  createOrder,
  editAnOrder,
};
