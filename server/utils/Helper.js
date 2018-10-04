import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const Helper = {
  // Hashed Password method
  // takes in param {string} password
  // returns {string} hashed password
  hashPassword(password) {
    return bcrypt.hashSync(password, 10);
  },
  // compare password
  // takes in param{string} hashPassword
  // takes in param{string} password
  // returns {Boolean} return True or False
  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },
  // isValidEmail method
  // takes in param{email} email
  // returns {Boolean} True or False
  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  },
  // Generate Token
  // takes in param{string} id
  // returns {string} token
  generateToken(id, role) {
    const token = jwt.sign({
      userId: id,
      userRole: role,
    },
    process.env.SECRET, { expiresIn: '5d' });
    return token;
  },
};

export default Helper;
