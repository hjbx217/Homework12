/* The command-line application should allow users to:

* Add departments, roles, employees

* View departments, roles, employees

* Update employee roles */

var db = require("./db/connection");
var inquirer = require("inquirer");


function userQuestion () {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View All Employees By Department",
          "View All Employees By Manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager",
          "View All Roles"
        ]
    }).then(function(answer) {
        switch (answer.choices) {
            case "View All Employees":
                viewAllEmployees();
                console.log(answer.choices);
                break;
                
            case "View All Employees By Department":
                viewEmployeesDepartment();
                console.log(answer.choices);
                break;

            case "View All Employees By Manager":
                viewEmployeesManager();
                console.log(answer.choices);
                break;

            case "Add Employee":
                addEmployee();
                console.log(answer.choices);
                break;

            case "Remove Employee":
                removeEmployee();
                console.log(answer.choices);
                break;

            case "Update Employee Role":
                updateEmployeeRole();
                console.log(answer.choices);
                break;

            case "Update Employee Manager":
                updateEmployeeManager();
                console.log(answer.choices);
                break;

            case "View All Roles":
                allRoles();
                console.log(answer.choices);
                break;

        }
    });
}

userQuestion();

function viewAllEmployees () {
    db.query('SELECT * FROM employee', function (error, results, fields) {
        if (error) throw error;
    console.log('The solution is: ', results);
});
viewAllEmployees();
}

function viewEmployeesDepartment () {
    db.query('SELECT * FROM department', function (error, results, fields) {
        if (error) throw error;
    console.log('The solution is: ', results);
    userQuestion();
});
}

function viewEmployeesManager () {
    db.query('SELECT * FROM employee', function (error, results, fields) {
        if (error) throw error;
    console.log('The solution is: ', results);
    userQuestion();

});
}

function addEmployee () {
    db.query('SELECT * FROM employee', function (error, results, fields) {
        if (error) throw error;
    console.log('The solution is: ', results);
    userQuestion();

});
}

function removeEmployee () {
    db.query('SELECT * FROM employee', function (error, results, fields) {
        if (error) throw error;
    console.log('The solution is: ', results);
    userQuestion();
});
}

function updateEmployeeRole () {
    db.query('SELECT * FROM employee', function (error, results, fields) {
        if (error) throw error;
    console.log('The solution is: ', results);
    userQuestion();
});
}


function updateEmployeeManager () {
    db.query('SELECT * FROM employee', function (error, results, fields) {
        if (error) throw error;
    console.log('The solution is: ', results);
    userQuestion();
});
}

function allRoles () {
    db.query('SELECT * FROM employee', function (error, results, fields) {
        if (error) throw error;
    console.log('The solution is: ', results);
    userQuestion();
});
}
//create a different function for each case listed in line 35- 61