const express = require("express");
const router = express.Router();
const { success } = require("../../../network/response");
const { list, get, remove, upsert, update } = require("./index");
const secure = require("./secure");

router.get("/", async (req, res) => {
  const users = await list();
  success(req, res, users);
});

router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  const user = await get(userId);
  success(req, res, user);
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
