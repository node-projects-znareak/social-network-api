const express = require("express");
const app = express();
const config = require("../config");
const morgan = require("morgan");

// routers
const post = require("./components/post/network");
const errors = require("../network/errors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api/post", post);
app.use((req, res, next) => {
  res.status(404).json({ status: 404, message: "Not Found" });
  next();
});
app.use(errors);

app.listen(config.postService.port, () => {
  console.log(`Servicio POST iniciado en el puerto ${config.postService.port}`);
});
