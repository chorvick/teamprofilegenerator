/// has properties of employee   also....github`&mdash;GitHub username

///* `getGithub()`

///* `getRole()`&mdash;overridden to return `'Engineer'`////


const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
}




module.exports = Engineer;
