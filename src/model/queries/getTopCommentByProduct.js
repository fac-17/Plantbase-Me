const connection = require("../database/db_connection");

module.exports = productId =>
  connection.query(
    `SELECT comment, votes, product_id
    FROM ratings
    WHERE product_id = $1
    ORDER BY votes DESC
    LIMIT 1`,
    [productId]
  );
