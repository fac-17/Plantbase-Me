const express = require("express");
const router = express.Router();

const home = require("./home");
const allResults = require("./allResults");
const cravingResults = require("./cravingResults");
const product = require("./product");
const aboutUs = require("./aboutUs");
const thanksForSubmission = require("./thanksForSubmission");
const howToContibute = require("./howToContribute");
const addProduct = require("./addProduct");
const error = require("./error");

router.get("/", home.get);
router.get("/results", allResults.get);
router.get("/results/:craving", cravingResults.get);
router.get("/product/:id", product.get);
router.get("/aboutus", aboutUs.get);
router.get("/thanksforsubmission", thanksForSubmission.get);
router.get("/howtocontribute", howToContibute.get);
router.post("/addproduct", addProduct.post);

router.use(error.client);
router.use(error.server);

module.exports = router;
