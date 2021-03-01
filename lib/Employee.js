///employee class will be used by all others as a template to build from

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }
}



module.exports = Employee;