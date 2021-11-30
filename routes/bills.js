const express = require("express");
const router = express.Router();
const { checkJwt } = require("../middleware");
const { list, show, create, update, remove } = require("../controllers/bills");

// List all items
router.get("/bills", checkJwt, list);

// Show single item
router.get("/bills/:id", checkJwt, show);

// Create new item
router.post("/bills/", checkJwt, create);

// Update
router.put("/bills/:id", checkJwt, update);

// Delete
router.delete("/bills/:id", checkJwt, remove);

module.exports = router;
