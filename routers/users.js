const express = require("express");
const router = express.Router();
const { checkJwt } = require("../middleware");
const { list, show, update, remove } = require("../controllers/users");

router.get("/users", checkJwt, list);

router.get("/users/:id", show);

router.put("/users/:id", update);

router.delete("/users/:id", remove);

module.exports = router;
