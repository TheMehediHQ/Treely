const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

function errorHandler(err, req, res, _next) {
  console.error(err);
  res.status(500).json({ error: err.message || "Internal server error" });
}

module.exports = { asyncHandler, errorHandler };
