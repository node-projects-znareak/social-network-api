const express = require("express");
const router = express.Router();
const { success } = require("../../../network/response");
const { list, get, upsert, update } = require("./index");

router.get("/", async (req, res) => {
  const posts = await list();
  success(req, res, posts);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const post = await get(id);
  success(req, res, post?.[0]);
});

router.post("/", async (req, res) => {
  const { text, user } = req.body;
  const postCreated = await upsert({ text, user });
  success(req, res, postCreated);
});

router.put("/:id", async (req, res) => {
  const postUpdated = await update(req.params.id, req.body);
  success(req, res, postUpdated);
});

module.exports = router;
