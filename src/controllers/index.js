const express = require("express");

const router = express.Router();

const cravingIcons = ["hamburger", "cheese", "jelly"];

router.get("/", (req, res) => {
  res.render("home", { cravingIcons });
});

router.get("/results", (req, res) => {
  res.render("results", { productResult });
});

module.exports = router;
