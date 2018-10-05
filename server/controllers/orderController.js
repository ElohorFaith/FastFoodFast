import db from '../config/dbConfig';

class orderController {
  static createOrder(req, res) {
    const {
      quantity, menuId,
    } = req.body;

    const status = 'New';

    const query = {
      text: 'INSERT INTO orders (quantity, userId, menuId, status) VALUES ($1, $2, $3, $4) RETURNING * ',
      values: [JSON.stringify(quantity), req.user.id, JSON.stringify(menuId), status],
    };

    db.query(query, (err, result) => {
      if (err) {
        throw err;
      } else {
        return res.status(201).json({
          message: 'Order created successfully',
          order: result.rows,
        });
      }
    });
  }

  // get order
  static getOrders(req, res) {
    (async () => {
      try {
        const getOrdersQuery = 'SELECT * FROM orders';
        const getQuery = await db.query(getOrdersQuery);
        return res.status(200).json({
          message: 'fetch orders request successful',
          Response: getQuery.rows,
        });
      } catch (error) {
        throw error;
      }
    })().catch((err) => {
      res.status(500).json({
        message: 'server Error 500',
        err,
      });
    });
  }
}

export default orderController;
