BEGIN;

DROP TABLE IF EXISTS cravings, products, ratings CASCADE;

CREATE TABLE cravings (
    id                  SERIAL          PRIMARY KEY,
    craving_name        VARCHAR(100)    NOT NULL
);

CREATE TABLE products (
    id                  SERIAL          PRIMARY KEY,
    product_name        VARCHAR(100)    NOT NULL,
    product_description VARCHAR(500)    NOT NULL,
    craving_id          INTEGER         NOT NULL,
    where_to_buy        text            ARRAY,
    product_image       VARCHAR(200),
    product_price       MONEY
);

CREATE TABLE ratings (
    id                  SERIAL          PRIMARY KEY,
    product_id          INTEGER         NOT NULL,
    rating              INTEGER         NOT NULL,
    comment             VARCHAR(500),
    tags                VARCHAR(200),
    votes               INTEGER
);

INSERT INTO cravings (craving_name) VALUES
("Cheese"),
("Meat"),
("Milk"),
("Sweets");

INSERT INTO products (product_name, product_description, where_to_buy, product_image, craving_id, product_price) VALUES
(
    "Violife Original Grated",
    "With coconut oil and vitamin B12. Melts great! Free from dairy, soya, gluten, lactose and nuts. No preservatives. Suitable for vegans & vegetarians. Kosher",
    "{"Waitrose", "Asda", "Morrisons"}",
    "https://imgur.com/ZCAQAGA",
    1,
    2.49
);
(
    "Engvita Yeast Flakes B12",
    "Engevita Yeast Flakes with B12 are a gluten-free, vegan food with a cheesy, nutty taste. Made from primary inactive yeast, without artificial additives or preservatives, these yeast flakes are the ideal condiment to sprinkle on soups, stews, casseroles, toppings, salads and breakfast cereals to enhance the flavour.
This pleasant tasting yeast is so yummy and also readily dissolved in water, milk, fruit or vegetable juices.
These yeast flakes have been fortified with Vitamin B12, which is considered to be an essential supplement to the vegan diet.
",
"{"Holland&Barrett", "Ocado", "Tesco"}",
"https://i.imgur.com/ct10sIE.jpg",
1,
3.10
);
(
    "Sainsbury's Free From Cheddar-Style With Onion",
    "Coconut oil based alternative to Cheddar cheese with caramelised red onion chutney",
    "{Sainsburies}",
    "https://i.imgur.com/d5THZ8k.jpg",
    1,
    2.25
);
(
    "Waitrose Vegan Original Grated",
    "Grated coconut derivative based alternative. Melts well",
    "{Waitrose}",
    "https://i.imgur.com/OLlOkLR.jpg",
    1,
    2,60
);
(
    "Daiya Medium Cheddar Style Block"
    "Medium Cheddar Style Farmhouse Block. Artfully artisanal crafted. Good source of calcium"
    "{Sainsburies}",
    "https://i.imgur.com/jNS9T49.jpg",
    1,
    4,50
);


INSERT INTO ratings (product_id, rating, comment, votes) VALUES
(1, 4, 'Great!, Tastes just like original cheddar', 5);


COMMIT;