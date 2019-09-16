const connection = require("../database/db_connection");

module.exports = rating_comment => {
  const { product_id, rating, comment, votes } = rating_comment;
  return connection.query(
    "INSERT INTO ratings (product_id, rating, comment, votes) VALUES ($1, $2, $3, $4)",
    [product_id, rating, comment, votes]
  );
};
