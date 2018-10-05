import db from '../config/dbConfig';
import Helper from '../utils/Helper';

class user {
  static async signup(req, res) {
    if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.password) {
      return res.status(400).json({
        message: 'Please fill in all fields',
      });
    }
    if (!Helper.isValidEmail(req.body.email)) {
      return res.status(400).json({
        message: 'Please enter a valid email address',
      });
    }
    const hashPassword = Helper.hashPassword(req.body.password);
    const signupQuery = `INSERT INTO users( firstname, lastname, email, userRole, password)
      VALUES($1, $2, $3, $4, $5)
      returning * `;
    const values = [
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      req.body.userRole = 'user',
      hashPassword,
    ];

    try {
      const { rows } = await db.query(signupQuery, values);
      const token = Helper.generateToken(rows[0].id, req.body.userRole);
      return res.status(201).json({
        token,
        message: 'Successful signup',
      });
    } catch (error) {
      if (error.routine === '_bt_check_unique') {
        return res.status(400).json({
          message: 'A User with same email exist',
        });
      }
      return res.status(400).send(error);
    }
  }

  static async signin(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        message: 'Please fill in all fields',
      });
    }
    if (!Helper.isValidEmail(req.body.email)) {
      return res.status(400).json({
        message: 'Please enter a valid email address',
      });
    }


    const findOneUserQuery = 'SELECT * FROM users WHERE email = $1';
    try {
      const { rows } = await db.query(findOneUserQuery, [req.body.email]);
      if (!rows[0]) {
        return res.status(400).json({
          message: 'User email is incorrect',
        });
      }
      if (!Helper.comparePassword(rows[0].password, req.body.password)) {
        return res.status(400).json({
          message: 'Incorrect password',
        });
      }

      const token = Helper.generateToken(rows[0].id, rows[0].userrole);
      return res.status(200).json({
        token,
        message: 'Successful Login',
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export default user;
