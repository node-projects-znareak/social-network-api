const express = require("express");
const router = express.Router();
const { success, error } = require("../../../network/response");
const { login, upsert } = require("./index");

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const data = await login(username, password, res);
    success(req, res, data);
  } catch (err) {
    error(req, res, err);
  }
});

module.exports = router;
