const express = require("express");
const router = express.Router();
const { checkJwt } = require("../middleware");
const { list, show, create, update, remove } = require("../controllers/users");

router.get("/users", list);

router.get("/users/:id", show);

router.post("/users/", create);

router.put("/users/:id", checkJwt, update);

router.delete("/users/:id", checkJwt, remove);

module.exports = router;
