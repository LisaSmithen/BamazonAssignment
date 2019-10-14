DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;
USE bamazon;

CREATE TABLE products(
item_id INT(4) NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT(20) NOT NULL,
PRIMARY KEY (item_id)
);

Select * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES (7000, "planners", "books", 35.00, 500),
(7500, "journals", "books", 25.00, 500),
(8000, "hoodies", "clothing", 35.00, 300),
(8500, "tshirts", "clothing", 30.00, 400),
(3300, "workbooks", "coaching", 25.00, 1000),
(3500, "entrepreneur courses", "coaching", 200.00, 1000),
(3000, "coaching packages", 500.00, 200),
(6300, "calendars", "office", 15.00, 300),
(6000, "mousepads", "office", 7.00, 200),
(6500, "bookmarks", "office", 5.00, 200);

