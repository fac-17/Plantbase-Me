const connection = require("../database/db_connection");

module.exports = productId => {
  return connection.query(
    "SELECT * FROM ratings WHERE product_id = $1 ORDER BY rating DESC",
    [productId]
  );
};
