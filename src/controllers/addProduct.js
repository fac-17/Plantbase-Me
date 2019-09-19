const {
  postProduct,
  getProductByName,
  postRatingComment
} = require("../model/queries");

exports.post = (req, res) => {
  const product = req.body;
  // extract relevant properites for the rating
  const { product_name, rating, comment } = product;

  // remove extra properties from product to post to products table
  delete product.rating;
  delete product.comment;

  // assign rating and comment to an object for passing to submitRating.js
  const rating_comment = {
    rating: rating,
    comment: comment
  };

  // Post the product (currently working)
  new Promise((resolve, reject) => {
    postProduct(product);
    resolve();
  })
    .then(() => {
      console.log("product name in promise", product_name);
      return getProductByName(product_name);
    })
    .then(result => {
      let prodId = result;
      console.log(prodId);
      return prodId;
    });

  // console.log("prodnameafter18", product_name);

  // // Function ceases working here - getProductByName returns a promise
  // console.log(getProductByName(product_name));

  // // Find product ID based upon the product's name
  // let prodid = getProductByName(product_name);

  // // Post the rating and comment
  // postRatingComment(rating_comment, prodid);
  // res.redirect("/thanksforsubmission");
};
