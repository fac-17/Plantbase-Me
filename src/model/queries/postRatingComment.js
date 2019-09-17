const connection = require("../database/db_connection");

module.exports = (rating_comment, product_id) => {
  const { rating, comment } = rating_comment;
  return connection.query(
    "INSERT INTO ratings (product_id, rating, comment, votes) VALUES ($1, $2, $3, $4)",
    [product_id, rating, comment, 0]
  );
};
