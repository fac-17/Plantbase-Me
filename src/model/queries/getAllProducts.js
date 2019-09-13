const connection = require("../database/db_connection");

module.exports = () =>
  connection.query(
    `SELECT p.id, product_name, product_description, product_image, product_avg_rating
    FROM products p
    JOIN (
        SELECT product_id, AVG(rating) AS product_avg_rating
        FROM ratings
        GROUP BY product_id
    ) AS avg_ratings
    ON avg_ratings.product_id = p.id;`
  );
