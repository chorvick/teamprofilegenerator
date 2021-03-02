/// manager test
const Manager = require("../lib/Manager");

test("Make sure office number works", () => {
    const officeNum = 123;
    const manager = new Manager("Henry", 999, "henry@henry.com", officeNum);
    expect(manager.officeNum).toBe(officeNum);

});


test("Make sure getRole function returns Manager", () => {
    const role = "Manager";
    const manager = new Manager("Henry", 999, "Henry@Henry.com", 123);
    expect(manager.getRole()).toBe(role);
});