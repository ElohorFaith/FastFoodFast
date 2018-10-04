import order from '../models/orders';
import db from '../config/dbConfig';

class orderController {
  static createOrder(req, res) {
    const {
      quantity, userId, menuId,
    } = req.body;
    const status = 'Pending';
    (async () => {
      try {
        const orderQuery = `INSERT INTO orders (quantity, userId, menuId, status)
      VALUES ($1, $2, $3, $4) RETURNING * `;

        const Query = await db.query(orderQuery, [quantity, userId, menuId, status]);
        return res.status(201).json({
          newOrder: order,
          message: 'Order created successfully',
          Response: Query.rows,
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
