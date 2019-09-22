const { postProduct, postRatingComment } = require("../model/queries");

exports.post = (req, res) => {
  const product = req.body;

  // extract relevant properites for the rating
  const { rating, comment } = product;

  // remove extra properties from product to post to products table
  delete product.rating;
  delete product.comment;

  // below I tried to isolate the problem and figured that this query might not do what it needs to do.
  //The id always comes back as an empty array even with a productname that def. exists in the database
  // let prodName = "Tofurky Feast";
  // prodName = "'" + prodName + "'";
  // console.log("prodname + quotes", prodName);
  // getProductByName(prodName).then((id) => {
  //   console.log(id);
  // }
  // )

  // Post the product & rating
  postProduct(product).then(() => {
    let prodName = product.product_name;
    prodName = "'" + prodName + "'";
    console.log("prodname + quotes", prodName);
    getProductByName(prodName);
  }).then(id => {
    const rating_comment = {
      rating: rating,
      comment: comment
    };
    postRatingComment(rating_comment, id[0].id);
    res.redirect("/thanksforsubmission");
  });
};
