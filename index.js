///// javascript goes here
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
console.log("Team Profile Generator")
const promptUser = (current_roster) => {
    let roster = current_roster || []
    // console.log("Team Profile Generator")
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
            out_cards += `<div class="card" style="min-width: 30%;background-color: powderblue;border: 3px black">
            
            <div class="card-body">
            <span class="fas fa-glasses"></span>
              <h3 class="card-title">${member.name}</h3>
              <h4 class="card-title">${member.role}</h4>
              <p class="card-text">ID: ${member.id}</p>
              <p class="card-text">Email: ${member.email}</p>
              <p class="card-text">Github: ${member.github_username}</p>
              
            </div>
          </div>`
        }

        if (member.role == "Intern") {
            // Make a card for an intern
            out_cards += `<div class="card" style="min-width: 30%;background-color: Bisque;border: 3px black">
            
            <div class="card-body">
            <span  class="fas fa-graduation-cap"></span>
              <h3 class="card-title">${member.name}</h3>
              <h4 class="card-title">${member.role}</h4>
              <p class="card-text">ID: ${member.id}</p>
              <p class="card-text">Email: ${member.email}</p>
              <p class="card-text">School: ${member.school}</p>
              
            </div>
          </div>`
        }

        if (member.role == "Manager") {
            // Make a card for a manager
            out_cards += `<div class="col-sm-4">
            <div class="card" style="min-width: 30%;background-color: Beige;border: 3px black">
            
            <div class="card-body">
            <span class="fas fa-coffee"></span>
              <h3 class="card-title">${member.name}</h3>
              <h4 class="card-title">${member.role}</h4>
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
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
  <script src="https://kit.fontawesome.com/a076d05399.js"></script>
  <title>Team Profile</title>
</head>
<body>
<div class="container-fluid">
<div class="row">
    <div class="col-12 jumbotron mb-3 team-heading">
<div class="header">
<h1 style="color:azure;text-align:center;background-color: blue;">My Team</h1>
 </div>
 </div>
 </div>


<br>
  <br>
  <br>
</div > 
<div class="container">
<div class="row">
<div class="team-area col-12 d-flex flex-wrap justify-content-center">
  
${populate_cards(team)}
</div>
</div>
</div>
</body>

</html>`

    return html
}








