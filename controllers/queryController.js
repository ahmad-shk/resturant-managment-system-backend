const Query = require("../models/Query");

// CREATE Query
const createQuery = async (req, res) => {
  try {
    const { name, phone, department, message, status } = req.body;

    const newQuery = new Query({ name, phone, department, message, status });
    await newQuery.save();

    res.status(201).json({ success: true, message: "Query submitted successfully" });
  } catch (error) {
    console.error("Error creating query:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// GET All Queries
const getQueries = async (req, res) => {
  try {
    const queries = await Query.find();
    res.status(200).json(queries);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET Single Query by ID
const getQueryById = async (req, res) => {
  try {
    const query = await Query.findById(req.params.id);
    if (!query) return res.status(404).json({ success: false, message: "Query not found" });
    res.status(200).json(query);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE Query
const updateQuery = async (req, res) => {
  try {
    const updated = await Query.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Query not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// DELETE Query
const deleteQuery = async (req, res) => {
  try {
    const deleted = await Query.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Query not found" });
    res.status(200).json({ success: true, message: "Query deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createQuery,
  getQueries,
  getQueryById,
  updateQuery,
  deleteQuery
};
