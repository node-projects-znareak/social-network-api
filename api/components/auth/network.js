const express = require("express");
const router = express.Router();
const { success, error } = require("../../../network/response");
const { login, upsert } = require("./index");

router.post("/login", (req, res) => {
  try {
    const { username, password } = req.body;
    const data = login(username, password);
    success(req, res, data);
  } catch (err) {
    console.log(err);
    error(req, res, err);
  }
});

module.exports = router;
