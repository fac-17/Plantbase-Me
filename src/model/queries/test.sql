
-- Working statement to get average rating for a product joined with product details.
SELECT p.id, product_name, product_description, product_image, averages
FROM products p
JOIN (
    SELECT product_id, AVG(rating) AS averages
    FROM ratings
    GROUP BY product_id
) AS r
ON r.product_id = p.id;

-- Working statement to get top comment for a product
SELECT comment, votes, product_id
FROM ratings
WHERE product_id = 1
ORDER BY votes DESC
LIMIT 1;

-- test combo of avg rating and top comment
SELECT c.comment, c.votes, r.product_id, AVG(r.rating) AS averages
    FROM ratings r
    JOIN (
        SELECT MAX(comment), MAX(votes), product_id
        FROM ratings
        WHERE product_id
    ) as c
ON c.product_id = r.product_id
GROUP BY r.product_id;
