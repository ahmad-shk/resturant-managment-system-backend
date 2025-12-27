const express = require("express");
const router = express.Router();
const {
  createQuery,
  getQueries,
  getQueryById,
  updateQuery,
  deleteQuery
} = require("../controllers/queryController");

// CREATE Query
router.post("/", createQuery);

// GET All Queries
router.get("/", getQueries);

// GET Single Query
router.get("/:id", getQueryById);

// UPDATE Query
router.put("/:id", updateQuery);

// DELETE Query
router.delete("/:id", deleteQuery);

module.exports = router;
