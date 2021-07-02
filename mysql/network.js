const express = require("express");
const router = express.Router();
const store = require("../store/mysql");
const { success } = require("../network/response");

router.get("/:table", list);
router.get("/:table/:id", get);
router.post("/:table", insert);
router.put("/:table", upsert);

async function list(req, res, next) {
  try {
    const table = req.params.table;
    const data = await store.list(table);
    success(req, res, data);
  } catch (err) {
    next(err);
  }
}

async function get(req, res, next) {
  try {
    const id = req.params.id;
    const table = req.params.table;
    const data = await store.get(table, id);
    success(req, res, data);
  } catch (err) {
    next(err);
  }
}

async function insert(req, res, next) {
  try {
    const id = req.params.id;
    const table = req.params.table;
    const data = await store.upsert(table, id, true);
    success(req, res, data);
  } catch (err) {
    next(err);
  }
}

async function upsert(req, res, next) {
  try {
    const id = req.params.id;
    const table = req.params.table;
    const data = await store.upsert(table, id);
    success(req, res, data);
  } catch (err) {
    next(err);
  }
}

module.exports = router;
