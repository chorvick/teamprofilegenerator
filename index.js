///// javascript goes here
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");

const promptUser = (current_roster) => {
    let roster = current_roster || []
    console.log("Team Profile Generator")
    /// console.log(`Current roster: ${JSON.stringify(roster)}`)
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
            message: "What is this person's office number?",
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
        ///console.log(`This is the roster ${roster}`)
        // Since I get an object, why cant I just use an array of those objects to populate the HTML if I am also writing the render method.
        if (answers.continue) {
            //  console.log("The user wants to continue")
            promptUser(roster)
        } else {
            //   console.log("No continue")
            fs.writeFile("index.html", render_team(roster), () => {
                console.log("The html file of your team has been generated. Thank you.")
            })
        }
    })
}

promptUser();


function populate_cards(roster) {
    let out_cards = ""
    roster.forEach(member => {
        if (member.role == "Engineer") {
            // Make a card for an engineer
            out_cards += `<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="">
            <div class="card-body">
            <span class="fas fa-glasses"></span>
              <h5 class="card-title">${member.name}</h5>
              <h5 class="card-title">${member.role}</h5>
              <p class="card-text">ID: ${member.id}</p>
              <p class="card-text">Email: ${member.email}</p>
              <p class="card-text">Github: ${member.github_username}</p>
              
            </div>
          </div>`
        }

        if (member.role == "Intern") {
            // Make a card for an intern
            out_cards += `<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="" alt="">
            <div class="card-body">
            <span class="fas fa-glasses"></span>
              <h5 class="card-title">${member.name}</h5>
              <h5 class="card-title">${member.role}</h5>
              <p class="card-text">ID: ${member.id}</p>
              <p class="card-text">Email: ${member.email}</p>
              <p class="card-text">School: ${member.school}</p>
              
            </div>
          </div>`
        }

        if (member.role == "Manager") {
            // Make a card for a manager
            out_cards += `<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="">
            <div class="card-body">
            <span class="fas fa-glasses"></span>
              <h5 class="card-title">${member.name}</h5>
              <h5 class="card-title">${member.role}</h5>
              <p class="card-text">ID: ${member.id}</p>
              <p class="card-text">Email: ${member.email}</p>
              <p class="card-text">Office Number: ${member.office_number}</p>
              
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
  <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet">
<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">

  <title>Team Profile</title>
</head>
<body>
<div class="header">
<h1 style="color:azure;text-align:center;background-color: blue;">My Team</h1>
  <br>
  <br>
  <br>
</div > 
${populate_cards(team)}

</body>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</html>`

    return html
}






