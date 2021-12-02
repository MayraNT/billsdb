const express = require("express");
const router = express.Router();
// const { checkJwt } = require("../middleware");
const { list, show, create, update, remove } = require("../controllers/banks");

router.get("/banks", list);

router.get("/banks/:id", show);

router.post("/banks/", create);

router.put("/banks/:id", update);

router.delete("/banks/:id", remove);

module.exports = router;