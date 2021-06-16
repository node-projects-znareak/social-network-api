const express = require("express");
const router = express.Router();
const { success } = require("../../../network/response");
const { list } = require("./index");

router.get("/", async (req, res) => {
  const users = await list();
  success(req, res, users);
});

module.exports = router;
