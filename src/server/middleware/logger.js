export default (req, res, next) => {
  console.log(`${req.method.toUpperCase()}: ${req.url}`);
  next();
};
