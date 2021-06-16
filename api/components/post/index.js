const ctr = require("./controller");
const store = require("../../../store/mysql");

module.exports = ctr(store);
