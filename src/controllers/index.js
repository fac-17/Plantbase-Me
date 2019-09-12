const express = require("express");

const router = express.Router();

const cravingIcons = ["hamburger", "cheese", "jelly"];
const productResult = [
  {
    product_name: "Violife Original Grated",
    product_description:
      "With coconut oil and vitamin B12. Melts great! Free from dairy, soya, gluten, lactose and nuts. No preservatives. Suitable for vegans & vegetarians. Kosher",

    product_image: "https://imgur.com/ZCAQAGA.jpg"
  }
];

router.get("/", (req, res) => {
  res.render("home", { cravingIcons });
});

router.get("/results", (req, res) => {
  res.render("results", { productResult });
});

module.exports = router;
