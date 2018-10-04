const checkOrderInput = (req, res, next) => {
  const {
    quantity,
    userId,
    menuId,
  } = req.body;
  if (quantity === '' || userId === '' || menuId === '') {
    return res.status(400).json({
      error: 'fill in the field',
    });
  }

  return next();
};
export default checkOrderInput;
