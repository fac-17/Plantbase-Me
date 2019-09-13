const express = require("express");
const router = express.Router();

const error = require("./error");
const home = require("./home");
const results = require("./results");
const product = require("./product");

router.get("/", home.get);
router.get("/results", results.get);
router.get("/product/:id", product.get);

router.use(error.client);
router.use(error.server);

module.exports = router;
