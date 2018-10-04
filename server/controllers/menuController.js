import menu from '../models/menu';
import db from '../config/dbConfig';


class menuController {
  // create menu
  static createMenu(req, res) {
    const { name, price } = req.body;
    (async () => {
      try {
        const menuQuery = `INSERT INTO menu (name, price)
        VALUES ($1, $2) RETURNING * `;
        const Query = await db.query(menuQuery, [name, price]);
        return res.status(201).json({
          message: 'Menu created successfully',
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

  // get menu
  static getMenu(req, res) {
    (async () => {
      try {
        const getMenuQuery = 'SELECT * FROM menu';
        const getQuery = await db.query(getMenuQuery);
        return res.status(200).json({
          menu,
          message: 'fetch menu request successful',
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
export default menuController;
