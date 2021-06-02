function success(req, res, message, status = 200) {
  res.status(status).json({
    status,
    error: false,
    body: message,
  });
}

function error(req, res, message = "Internal server error", status = 500) {
  res.status(status).json({
    status,
    error: true,
    body: message,
  });
}

module.exports = { success, error };
