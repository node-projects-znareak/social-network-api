const ctr = require("./controller");
const store = require("../../../store/remote-mysql");
// const store = require("../../../store/mysql");

module.exports = ctr(store);
