const express = require("express");

const router = express.Router();

const cravingIcons = ["hamburger", "cheese", "jelly"];

router.get("/", (req, res) => {
  res.render("home", { cravingIcons });
});

module.exports = router;
