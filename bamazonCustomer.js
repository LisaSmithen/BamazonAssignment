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