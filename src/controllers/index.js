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

// router.get("/product-page", (req, res) => {
//   res.render("productPage", { chosenProduct });
// });

// const allProducts = [
//   {
//     id: 1,
//     product_name: "Violife Original Grated",
//     product_description:
//       "With coconut oil and vitamin B12. Melts great! Free from dairy, soya, gluten, lactose and nuts. No preservatives. Suitable for vegans & vegetarians. Kosher",
//     product_image: "https://imgur.com/ZCAQAGA.jpg"
//   }
// ];

// const chosenProduct = {
//   id: 1,
//   product_name: "Violife Original Grated",
//   product_description:
//     "With coconut oil and vitamin B12. Melts great! Free from dairy, soya, gluten, lactose and nuts. No preservatives. Suitable for vegans & vegetarians. Kosher",
//   product_price: 2.49,
//   product_image: "https://imgur.com/ZCAQAGA.jpg",
//   where_to_buy: ["Waitrose", "Asda", "Morrisons"]
// };

// queries.getAllProducts().then(allProducts => {
//   queries
//     .getRatingsSummaryOfList(allProducts)
//     .then(list => console.log("rated list: ", list));
// });

// queries
//   .getProductsbyCraving(1)
//   .then(productList => console.log("this is the product list:", productList));

// queries
//   .getRatingsByProduct(1)
//   .then(ratingsList =>
//     console.log("this is the all the ratings for the product:", ratingsList)
//   );

// queries
//   .getProductsbyCraving(1)
//   .then(productList => console.log("this is the product list:", productList));
