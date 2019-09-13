const connection = require("../database/db_connection");

module.exports = cravingId => {
  return connection.query(
    "SELECT id, product_name, product_description, product_image FROM products WHERE craving_id = $1",
    [cravingId]
  );
};
