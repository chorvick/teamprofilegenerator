///// javascript goes here
const inquirer = require("inquirer");
//const Employee = require("./lib/Employee");
//const Manager = require("./lib/Manager");
//const Engineer = require("./lib/Engineer");
//const Intern = require("./lib/Intern");
const fs = require("fs");

const promptUser = (current_roster) => {
    let roster = current_roster || []
    console.log("Team Profile Generator")
    console.log(`Current roster: ${JSON.stringify(roster)}`)
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
                "Intern",
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
        },
        {
            massage: "What is this person's office number?",
            name: "office_number",
            when: (answers) => answers.role === "Manager"
        },
        {
            message: "What is the user's Github?",
            name: "github_username",
            when: (answers) => answers.role === "Engineer"
        },
        {
            message: "What School does the intern go to?",
            name: "school",
            when: (answers) => answers.role === "Intern"
        },
        {
            type: "confirm",
            message: "Do you wish to continue adding team members?",
            name: "continue"
        }
    ]).then(answers => {
        roster.push(answers)
        console.log(`This is the roster ${roster}`)
        // Since I get an object, why cant I just use an array of those objects to populate the HTML if I am also writing the render method.
        if (answers.continue) {
            console.log("The user wants to continue")
            promptUser(roster)
        } else {
            console.log("No continue")
            fs.writeFile("test.html", render_team(roster), () => {
                console.log("I wrote a file")
            })
        }
    })
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

function populate_cards(roster) {
    let out_cards = ""
    roster.forEach(member => {
        if (member.role == "Engineer") {
            // Make a card for an engineer
            out_cards += `<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${member.name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
        }
    })
    return out_cards
}
function render_team(team) {

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <title>Team Profile</title>
</head>
<body>
${populate_cards(team)}

</body>
</html>`

    return html
}