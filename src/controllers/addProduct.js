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

  let prodid = 0;

  const postProductPromise = new Promise((resolve, reject) => {
    postProduct(product);
    resolve(getProductByName(product_name));
    reject(new Error("Error"));
  });
  // Post the product (currently working)

  // Function ceases working here

  // Find product ID based upon the product's name

  // postProductPromise.then(() => {
  //   console.log("Get Product by Name before");
  //   prodid = getProductByName(product_name);
  //   console.log("Get Product by Name after");
  // });

  const onResolved = resolvedValue =>
    postRatingComment(rating_comment, resolvedValue);

  const onRejected = error => console.log(error);
  // Post the rating and comment
  postProductPromise.then(onResolved, onRejected);

  res.redirect("/thanksforsubmission");
};
