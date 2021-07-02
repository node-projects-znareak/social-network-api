const express = require("express");
const app = express();
const morgan = require("morgan");
const config = require("../config");
const errors = require("../network/errors");
const routers = require("./network");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(routers);
app.use(errors);

app.listen(config.mysqlService.port, () => {
  console.log(
    `Servicio MYSQL iniciado en el puerto ${config.mysqlService.port}`
  );
});
