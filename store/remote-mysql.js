const config = require("../config");
const RemoteConnection = require("./remote");

module.exports = new RemoteConnection(
  config.mysqlService.host,
  config.mysqlService.port
);
