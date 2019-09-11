BEGIN;

DROP TABLE IF EXISTS cravings, products, ratings CASCADE;

CREATE TABLE cravings (
    id SERIAL PRIMARY KEY,
    craving_name VARCHAR(100)
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(100),
    product_description VARCHAR(500),
    where_to_buy VARCHAR(200),
    product_image VARCHAR(200),
    craving_id INTEGER,
    product_price MONEY
);

CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    product_id INTEGER,
    rating INTEGER,
    comments VARCHAR(500),
    tags VARCHAR(200)
);

INSERT INTO cravings (craving_name) VALUES
('Cheese'),('Meat'), ('Milk'), ('Sweets');

INSERT INTO products (product_name, product_description, where_to_buy, product_image, craving_id, product_price) VALUES
('Violife Original Grated', 'With coconut oil and vitamin B12. Melts great! Free from dairy, soya, gluten, lactose and nuts. No preservatives. Suitable for vegans & vegetarians. Kosher', 'Waitrose, Asda, Morrisons','https://imgur.com/ZCAQAGA',1, 2.49 );

INSERT INTO ratings (product_id, rating, comments) VALUES
(1, 4, 'Great!, Tastes just like original cheddar');


COMMIT;