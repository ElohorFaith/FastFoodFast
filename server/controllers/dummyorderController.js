import orders from '../models/orders';


class OrderController {
  // get all orders
  static getOrders(req, res) {
    res.status(200).send({
      orders,
      message: 'fetch all orders request is successful',

    });
  }

  // get one order
  static getOneOrder(req, res) {
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
  }

  // create order
  static createOrder(req, res) {
    if (req.body.name === '' || req.body.price === '' || req.body.status === '' || req.body.date === '') {
      return res.status(400).json({
        error: 'fill in the field',
      });
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
  }

  // edit an order
  static editAnOrder(req, res) {
  // first get the order you want to edit by the id
    const singleOrder = orders.find(order => order.id === parseInt(req.params.id, 10));
    if (!singleOrder) {
      res.status(404).json({
        error: 'The order with the given Id is not found.',
      });
    }
    singleOrder.status = req.body.status;
    return res.status(200).json({
      message: 'Order Status updated',
      singleOrder,
    });
  }
}


export default OrderController;
