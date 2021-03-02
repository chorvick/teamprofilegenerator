//employee test
const Employee = require("../lib/Employee");

test("Should return an object.", () => {
    const Henry = new Employee();
    expect(typeof (Henry)).toBe("object");

})
test("Check to see if name can be set in class", () => {
    const name = "Henry";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);


})

test("check that id will return properly", () => {
    const id = 999;
    const employee = new Employee("Henry", id);
    expect(employee.id).toBe(id);


})

test("check that e mail returns properly", () => {
    const email = "Henry@Henry.com";
    const employee = new Employee("Henry", 999, email);
    expect(employee.email).toBe(email);


})
