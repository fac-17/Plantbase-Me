const express = require("express");
const queries = require("../model/queries");
const router = express.Router();

// const cravingIcons = ["hamburger", "cheese", "jelly"];
const allProducts = [
  {
    product_name: "Violife Original Grated",
    product_description:
      "With coconut oil and vitamin B12. Melts great! Free from dairy, soya, gluten, lactose and nuts. No preservatives. Suitable for vegans & vegetarians. Kosher",

    product_image: "https://imgur.com/ZCAQAGA.jpg"
  }
];

const chosenProduct = {
  product_name: "Violife Original Grated",
  product_description:
    "With coconut oil and vitamin B12. Melts great! Free from dairy, soya, gluten, lactose and nuts. No preservatives. Suitable for vegans & vegetarians. Kosher",
  product_price: 2.49,
  product_image: "https://imgur.com/ZCAQAGA.jpg",
  where_to_buy: ["Waitrose", "Asda", "Morrisons"]
};

router.get("/", (req, res) => {
  queries
    .getCravings()
    .then(cravings => res.render("home", { cravings }))
    .catch(err => next(err));
});

queries
  .getProductsbyCraving(1)
  .then(productList => console.log("this is the product list:", productList));

router.get("/results", (req, res) => {
  res.render("results", { allProducts });
});

router.get("/product-page", (req, res) => {
  res.render("productPage", { chosenProduct });
});

module.exports = router;
