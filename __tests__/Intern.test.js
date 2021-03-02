/// intern test below
const Intern = require("../lib/Intern");


test("Make sure school works", () => {
    const school = "xxx";
    const intern = new Intern("Henry", 999, "henry@henry.com", school);
    expect(intern.school).toBe(school);

});


test("Test interns getSchool function works properly", () => {
    const school = "xxx";
    const intern = new Intern("Henry", 999, "Henry@Henry.com", school);
    expect(intern.getSchool()).toBe("xxx");


});

test("Make sure getRole function returns Intern", () => {
    const role = "Intern";
    const intern = new Intern("Henry", 999, "Henry@Henry.com", "xxx");
    expect(intern.getRole()).toBe(role);
});




