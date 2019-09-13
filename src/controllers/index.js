const express = require("express");
const queries = require("../model/queries");
const router = express.Router();
const error = require("./error");

// const allProducts = [
//   {
//     id: 1,
//     product_name: "Violife Original Grated",
//     product_description:
//       "With coconut oil and vitamin B12. Melts great! Free from dairy, soya, gluten, lactose and nuts. No preservatives. Suitable for vegans & vegetarians. Kosher",
//     product_image: "https://imgur.com/ZCAQAGA.jpg"
//   }
// ];

const chosenProduct = {
  id: 1,
  product_name: "Violife Original Grated",
  product_description:
    "With coconut oil and vitamin B12. Melts great! Free from dairy, soya, gluten, lactose and nuts. No preservatives. Suitable for vegans & vegetarians. Kosher",
  product_price: 2.49,
  product_image: "https://imgur.com/ZCAQAGA.jpg",
  where_to_buy: ["Waitrose", "Asda", "Morrisons"],
  craving_id: 1
};

router.get("/", (req, res) => {
  queries
    .getCravings()
    .then(cravings => res.render("home", { cravings }))
    .catch(err => next(err));
});

// queries
//   .getProductsbyCraving(1)
//   .then(productList => console.log("this is the product list:", productList));

router.get("/results", (req, res) => {
  queries
    .getAllProducts()
    .then(allProducts => res.render("results", { allProducts }))
    .catch(err => next(err));
});

//TEST FOR POSTING A NEW PRODUCT
// queries
//   .postProduct(chosenProduct)
//   .then(postProduct => console.log(postProduct))
//   .catch(err => next(err));

queries.getAllProducts().then(allProducts => console.log(allProducts));
// res.render("added product", { postProduct }))

//TEST TO GET ALL RATINGS FOR PRODUCT
// queries
//   .getRatingsByProduct(1)
//   .then(ratingsList =>
//     console.log("this is the all the ratings for the product:", ratingsList)
//   );

// TEST TO GET PRODUCT LIST
// queries
//   .getProductsbyCraving(1)
//   .then(productList => console.log("this is the product list:", productList));

// router.get("/product-page", (req, res) => {
//   res.render("productPage", { chosenProduct });
// });

router.use(error.client);
router.use(error.server);

module.exports = router;
