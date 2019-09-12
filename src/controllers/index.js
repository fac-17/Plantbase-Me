const express = require("express");
const queries = require("../model/queries");
const router = express.Router();

router.get("/", (req, res) => {
  queries
    .getCravings()
    .then(cravings => res.render("home", { cravings }))
    .catch(err => next(err));
});

queries
  .getProductsbyCraving(1)
  .then(productList => console.log("this is the product list:", productList));

module.exports = router;
