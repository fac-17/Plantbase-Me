const express = require("express");
const queries = require("../model/queries");
const router = express.Router();

router.get("/", (req, res) => {
  queries
    .getCravingNames()
    .then(cravingIcons => res.render("home", { cravingIcons }))
    .catch(err => next(err));
});

module.exports = router;
