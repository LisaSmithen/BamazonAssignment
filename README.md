# BamazonAssignment

# Bamazon

## Description
# Uncaged Phoenix Bamazon Store
This store application implements a simple command line based storefront using the npm [inquirer](https://www.npmjs.com/package/inquirer) package and the MySQL database backend together with the npm [mysql](https://www.npmjs.com/package/mysql) package. The application is presented through the customer interface. 

The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department [ from the books, in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

To run the customer interface please follow the steps below:

git clone git@github.com:LisaSmithen/bamazon.git
	cd bamazon
	npm install
	node bamazonCustomer.js