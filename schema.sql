CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INTEGER(100) AUTO INCREMENT,    
    product_name VARCHAR(100),
    department_name VARCHAR(100), 
    price INTEGER(100),
    stock_quantity INTEGER(100),
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("Dyson Vaccum", "Household", 500, 50),
("Ninetendo Switch", "Gaming", 300, 35),
("Samsung SmartTv", "Electronics", 400, 125),
("iPhone 7 Plus Glitter Case", "Acessories", 20, 150),
("Rice Cooker", "Household", 45, 60),
("One Piece Bikini","Women's Clothing", 70, 50),
("Method Surface Cleaner", "Household", 60, 50),
("Steve Madden Troopa Boots", "Women's Shoes", 100, 80),
("Squirt 6 Pack", "Food", 15, 30),
("PUBG Digital Code", "Gaming", 20, 15);   