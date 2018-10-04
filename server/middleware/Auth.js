import jwt from 'jsonwebtoken';
import db from '../config/dbConfig';

const Auth = {
  // to verify token
  async isTokenValid(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
      return res.status(401).json({
        message: 'Provide token',
      });
    }
    try {
      const decoded = await jwt.verify(token, process.env.SECRET);
      const user = 'SELECT * FROM users WHERE id = $1';
      // check if decoded id is the same with corresponding id in the database
      const { rows } = await db.query(user, [decoded.Id]);
      if (!rows[0]) {
        return res.status(401).json({
          message: 'Invalid Token',
        });
      }
      req.user = { id: decoded.Id };
      next();
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async isAdmin(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
      return res.status(401).json({
        message: 'Provide token',
      });
    }
    const decoded = await jwt.verify(token, process.env.SECRET);
    if (decoded.userRole !== 'admin') {
      return res.status(401).json({
        message: 'Unauthorised',
      });
    }
    return next();
  },
};

export default Auth;
