const auth = require("../../../auth");

module.exports = function checkAuth(action) {
  return function middleware(req, res, next) {
    switch (action) {
      case "update":
        const owner = req.params.id;
        auth.check.own(req, owner);
        next();
        break;

      case "token":
        auth.check.logged(req);
        next();
        break;

      default:
        next();
    }
  };
};
