const connection = require("../database/db_connection");

module.exports = productId => {
  return connection.query("SELECT * FROM product WHERE product_id = $1", [
    productId
  ]);
};
