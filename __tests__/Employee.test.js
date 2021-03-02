//employee test
const Employee = require("../lib/Employee");

test("Should return an object.", () => {
    const Henry = new Employee()
    expect(typeof (Henry)).tobe("object");

});