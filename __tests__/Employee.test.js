//employee test
const Employee = require("../lib/Employee");

test("Should return an object.", () => {
    const Henry = new Employee()
    expect(typeof (Henry)).toBe("object");

});

test("Check to see if name can be set in class", () => {
    const name = "Henry"
    const employee = new Employee(name);
    expect(employee.name).toBe(name)


});