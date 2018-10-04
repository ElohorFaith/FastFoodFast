import db from '../config/dbConfig';

class orderController {
  static createOrder(req, res) {
    const {
      quantity, menuId,
    } = req.body;

    const status = 'New';

    const query = {
      text: 'INSERT INTO orders (quantity, userId, menuId, status) VALUES ($1, $2, $3, $4) RETURNING * ',
      values: [quantity, req.user.id, menuId, status],
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
}

export default orderController;
