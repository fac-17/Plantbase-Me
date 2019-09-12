const connection = require("../database/db_connection");

module.exports = () =>
  connection.query(
    `SELECT p.id, product_name, product_description, product_image, averages
    FROM products p
    JOIN (
        SELECT product_id, AVG(rating) AS averages
        FROM ratings
        GROUP BY product_id
    ) AS r
    ON r.product_id = p.id`
  );
