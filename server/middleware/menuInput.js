const checkMenuInput = (req, res, next) => {
  const {
    name,
    price,
  } = req.body;

  if (name === '' || price === '') {
    return res.status(400).json({
      error: 'fill in the field',
    });
  }

  return next();
};
export default checkMenuInput;
