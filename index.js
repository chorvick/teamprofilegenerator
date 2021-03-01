///// javascript goes here
const inquirer = require("inquirer");
//const Employee = require("./lib/Employee");
//const Manager = require("./lib/Manager");
//const Engineer = require("./lib/Engineer");
//const Intern = require("./lib/Intern");
const fs = require("fs");




const promptUser = () => {
    ///    console.log("Team Profile Generator")

    inquirer.prompt([
        {
            message: "Please enter the employee's name ",
            name: "name"

        },
        {
            type: "list",
            message: "Please select the employee job title ",
            choices: [
                "Engineer",
                "intern",
                "Manager"
            ],
            name: "role"
        },
        {
            message: "Please enter the employee Id number ",
            name: "id"
        },
        {
            message: "Please enter the employee's e mail address ",
            name: "email"
        }

    ])






}
promptUser();
