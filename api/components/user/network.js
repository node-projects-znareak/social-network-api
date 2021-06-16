const express = require("express");
const router = express.Router();
const { success } = require("../../../network/response");
const {
  list,
  get,
  remove,
  upsert,
  update,
  follow,
  followers,
} = require("./index");
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

router.get("/:id/followers", async (req, res) => {
  const data = await followers(req.params.id);
  success(req, res, data);
});

router.post("/", async (req, res) => {
  const user = req.body;
  const userCreated = await upsert(user, true);
  success(req, res, userCreated, 201);
});

router.post("/follow/:id", secure("token"), async (req, res) => {
  const data = await follow(req.user.id, req.params.id);
  success(req, res, data);
});

router.delete("/:id", (req, res) => {
  const userId = req.params.id;
  success(req, res, remove(userId));
});

router.put("/:id", secure("update"), async (req, res) => {
  const userId = req.params.id;
  const payload = req.body;
  const updated = await update(userId, payload);
  success(req, res, updated);
});
module.exports = router;
