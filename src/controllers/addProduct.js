const { postProduct, postRatingComment } = require("../model/queries");

exports.post = (req, res) => {
  const product = req.body;
  console.log(product);
  // extract relevant properites for the rating
  // const { product_name, rating, comment } = product;

  // remove extra properties from product to post to products table
  // delete product.rating;
  // delete product.comment;

  // assign rating and comment to an object for passing to submitRating.js

  // console.log("rateng_comment", rating_comment);

  // Post the product (currently working)
  postProduct(product).then(id => {
    console.log(id[0].id);
    const rating_comment = {
      rating: 0,
      comment: initial
    };
    postRatingComment(rating_comment, id[0].id);
    res.redirect("/thanksforsubmission");
  });
};

// new Promise((resolve, reject) => {
//   console.log("postproductquery result", postProduct(product));
//   return postProduct(product);
// })
//   .then(id => {
//     console.log("postRatingComment", postRatingComment(rating_comment, id));
//     resolve(postRatingComment(rating_comment, id));
//     //res.redirect("/thanksforsubmission");
//   })
//   .catch(err => next(err));

// console.log("prodnameafter18", product_name);

// // Function ceases working here - getProductByName returns a promise
// console.log(getProductByName(product_name));

// // Find product ID based upon the product's name
// let prodid = getProductByName(product_name);

// // Post the rating and comment
// postRatingComment(rating_comment, prodid);
// res.redirect("/thanksforsubmission");
