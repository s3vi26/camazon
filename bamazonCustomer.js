const fs = require("fs");
let mysql = require("mysql");
let inquirer = require('inquirer');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connectionComplete();
});

function connectionComplete() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);


        inquirer.prompt([{
                    type: "list",
                    name: "item_id",
                    choices: function() {
                        let choiceArray = [];
                        for (let i = 0; i < res.length; i++) {
                            choiceArray.push(res[i].product_name);
                        }
                        return choiceArray;
                    },
                    message: "What is the item of the id you would like to buy?"
                },
                {
                    type: "input",
                    name: "quantity",
                    message: "How many units of the product would you like to buy?"
                }
            ])
            .then(function(answer) {
                let chosenItem;
                for (let i = 0; i < res.length; i++) {
                    if (res[i].product_name === answer.choice) {
                        chosenItem = results[i];
                    }
                }
                if (chosenItem.stock_quantity < parseInt(answer.quantity)) {
                    connection.query(
                        "UPDATE products SET ? WHERE ?", [{
                                stock_quantity: answer.quantity
                            },
                            {
                                item_id: chosenItem.item_id
                            }
                        ],
                        function(error) {
                            if (error) throw err;
                            console.log("Thanks for shopping with us!");
                            start();
                        }
                    );
                } else {
                    
                    console.log("Oops! This is awkward, we dont have enough stock to fulfill your order :(");
                    start();
                }

            })
        connection.end();
    });
}