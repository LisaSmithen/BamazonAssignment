var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require ("cli-table");

var connection =mysql.createConnection({
host: "localhost",
port:7777,
user: "root",
password:"",
database: "bamazon"

});

connection.connect(function(err){
if(err)throw err;
console.log("connected as id" + connection.threadId);
});

var displayProducts =function(){
    var query ="Select * FROM products";
    connection.query(query, function(err, res){
        if(err) throw err;

        var displayTable = new Table ({
			head: ["Item ID", "Product Name", "Catergory", "Price", "Quantity"],
			colWidths: [10,25,25,10,14]
		});
		for(var i = 0; i < res.length; i++){
			displayTable.push(
				[res[i].item_id,res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
				);
		}
		console.log(displayTable.toString());
		purchasePrompt();
	});
}

function purchasePrompt(){
    inquirer.prompt([
    {
    name: "ID",
    type: "input",
    message: "Please enter the ID of the product they would like to buy.",
    filter: Number
},
{

name: "Quantity",
type: "input",
message: "How many units of the product they would like to buy?",
filter: Number
},

]).then(function(answers){
    var quantityNeeded = answers.Quantity;
    var IDrequested = answers.ID;
    purchaseOrder(IDrequested, quantityNeeded);
});
};

function purchaseOrder(ID, amtNeeded){
	connection.query('Select * FROM products WHERE item_id = ' + ID, function(err,res){
		if(err){console.log(err)};
		if(amtNeeded <= res[0].stock_quantity){
			var totalCost = res[0].price * amtNeeded;
			console.log("Good news your order is in stock!");
			console.log("Your total cost for " + amtNeeded + " " +res[0].product_name + " is " + totalCost + " Thank you from ordering with us!");

			connection.query("UPDATE products SET stock_quantity = stock_quantity - " + amtNeeded + "WHERE item_id = " + ID);
		} else{
			console.log("Due to the high demand for our items we do not have sufficient stock in " + res[0].product_name + "to complete your order at this time.");
		};
		displayProducts();
	});
};

displayProducts();







}