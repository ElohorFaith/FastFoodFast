import db from '../config/dbConfig';

class validateUserSignup {
  static signup(req, res) {
    const {
      firstname,
      lastname,
      email,
      password,
    } = req.body;
    const query = {
      text: 'INSERT INTO users VALUES ($1,$2,$3,$4)',
      values: [firstname, lastname, email, password],
    };
    db.query(query, (err) => {
      console.log(err);
      return res.status(201).json({
        success: true,
        message: 'user created',
      });
    });
  }
}
export default validateUserSignup;
