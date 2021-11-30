const express = require("express");
const router = express.Router();
const { checkJwt } = require("../middleware");
const { list, show, create, update, remove } = require("../controllers/banks");

router.get("/banks", checkJwt, list);

router.get("/banks/:id", checkJwt, show);

router.post("/banks/", checkJwt, create);

router.put("/banks/:id", checkJwt, update);

router.delete("/banks/:id", checkJwt, remove);

module.exports = router;