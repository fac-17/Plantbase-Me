const connection = require("../database/db_connection");

module.exports = () =>
  connection.query(
    `SELECT id, product_name, product_description, product_image
    FROM products;`
  );
