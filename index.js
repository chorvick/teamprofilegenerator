///// javascript goes here
const inquirer = require("inquirer");
//const Employee = require("./lib/Employee");
//const Manager = require("./lib/Manager");
//const Engineer = require("./lib/Engineer");
//const Intern = require("./lib/Intern");
const fs = require("fs");




const promptUser = () => {
    console.log("Team Profile Generator")

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
// if (role === "Intern") {
//     extraInfo = "school name ";
// } else if (role === "Engineer") {
//     extraInfo = "Github user name ";
// } else {
//     extraInfo = "Office number ";
// }

// inquirer.prompt([
//     {
//         message: `Please enter this team members ${extraInfo}`,
//         name: "extraInfo"
//     },
//     {
//         type: "list",
//         message: "Would you like to add another team member test ?",
//         choices: [
//             "yes",
//             "no"
//         ],
//         name: "addNext"
//     }
// ])




promptUser();

// const promptUser = () => {
//     promptUser().then((answers) => {
//         try {
//             const html = generateHtml(answers);
//             fs.writeFileSync('./src/index.html', html);
//             console.log('Successfully wrote to read me');
//         } catch (error) {
//             console.log(error);


//         }
//     });
// }

// function generateHtml() {

//     const html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Team Profile</title>
// </head>
// <body>

// </body>
// </html>`
// }