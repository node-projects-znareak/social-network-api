const express = require("express");
const router = express.Router();
const { success, error } = require("../../../network/response");
const { list, get, remove, upsert, update } = require("./index");
const secure = require("./secure");

router.get("/", (req, res) => {
  success(req, res, list());
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  success(req, res, get(userId));
});

router.post("/", (req, res) => {
  const user = req.body;
  success(req, res, upsert(user), 201);
});

router.delete("/:id", (req, res) => {
  const userId = req.params.id;
  success(req, res, remove(userId));
});

router.put("/:id", secure("update"), (req, res) => {
  const userId = req.params.id;
  const payload = req.body;
  success(req, res, update(userId, payload));
});
module.exports = router;
