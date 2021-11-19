const express = require("express");
const router = express.Router();
const { list, show, create, update, remove } = require("../controllers/bills");

// List all items
router.get("/bills", list);

// Show single item
router.get("/bills/:id", show);

// Create new item
router.post("/bills/", create);

// Update
router.put("/bills/:id", update);

// Delete
router.delete("/bills/:id", remove);

module.exports = router;
