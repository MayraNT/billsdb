const express = require("express");
const router = express.Router();
const { checkJwt } = require("../middleware");
const { list, show, update, remove } = require("../controllers/users");

router.get("/users", checkJwt, list);

router.get("/users/:id", checkJwt, show);

router.put("/users/:id", checkJwt, update);

router.delete("/users/:id", checkJwt, remove);

module.exports = router;
