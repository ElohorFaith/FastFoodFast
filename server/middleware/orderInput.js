const checkOrderInput = (req, res, next) => {
  const {
    quantity,
    userId,
    menuId,
  } = req.body;
  if (!quantity || !menuId) {
    return res.status(400).json({
      error: 'fill in the required fields',
    });
  }

  return next();
};
export default checkOrderInput;
