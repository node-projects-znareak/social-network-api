const express = require("express");
const app = express();
const config = require("../config");
const morgan = require("morgan");

// routers
const auth = require("./components/auth/network");
const user = require("./components/user/network");
const post = require("./components/post/network");
const errors = require("../network/errors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/post", post);
app.use((req, res, next) => {
  res.status(404).json({ status: 404, message: "Not Found" });
  next();
});
app.use(errors);

app.listen(config.api.port, () => {
  console.log(`Servidor iniciado en el puerto ${config.api.port}`);
});
