const express = require("express");
const router = express.Router();

const home = require("./home");
const allResults = require("./allResults");
const cravingResults = require("./cravingResults");
const product = require("./product");
const aboutUs = require("./aboutUs");
const thanksForSubmission = require("./thanksForSubmission");
const howToContibute = require("./howToContribute");
const submitRating = require("./submitRating");
const submitUpvote = require("./submitUpvote");
const addProduct = require("./addProduct");
const error = require("./error");
const ourMission = require("./ourMission");
const letMeAdd = require("./letMeAdd");

router.get("/", home.get);
router.get("/results", allResults.get);
router.get("/results/:craving", cravingResults.get);
router.get("/product/:id", product.get);
router.get("/aboutus", aboutUs.get);
router.get("/thanksforsubmission", thanksForSubmission.get);
router.get("/howtocontribute", howToContibute.get);
router.get("/ourmission", ourMission.get);
router.post("/submitrating/:prodid", submitRating.post);
router.get("/letmeadd", letMeAdd.get);
router.post("/addproduct", addProduct.post);
router.post("/upvote", submitUpvote.post);

router.use(error.client);
router.use(error.server);

module.exports = router;
