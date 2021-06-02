const express = require("express");
const router = express.Router();
const { success, error } = require("../../../network/response");
const { list, get, remove, upsert } = require("./index");

router.get("/", (req, res) => {
  try {
    success(req, res, list());
  } catch (err) {
    error(req, res, err);
  }
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  try {
    success(req, res, get(userId));
  } catch (err) {
    console.log(err);
    error(req, res, err);
  }
});

router.post("/", (req, res) => {
  const user = req.body;
  try {
    success(req, res, upsert(user), 201);
  } catch (err) {
    console.log(err);
    error(req, res, err);
  }
});

router.delete("/:id", (req, res) => {
  const userId = req.params.id;
  try {
    success(req, res, remove(userId));
  } catch (err) {
    console.log(err);
    error(req, res, err);
  }
});
module.exports = router;
