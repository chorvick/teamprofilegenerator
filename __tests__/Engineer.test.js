////Engineer test code below////
const Engineer = require("../lib/Engineer");


test("Make sure github user name works", () => {
    const gitHubName = "HenryHill";
    const engineer = new Engineer("Henry", 999, "Henry@Henry.com", gitHubName);
    expect(engineer.github).toBe(gitHubName);

});

test("Test github function works for Engineer", () => {
    const gitHubName = "HenryHill";
    const engineer = new Engineer("Henry", 999, "Henry@Henry.com", gitHubName);
    expect(engineer.getGithub()).toBe("HenryHill");


});

test("Make sure getRole function returns Engineer", () => {
    const role = "Engineer";
    const engineer = new Engineer("Henry", 999, "Henry@Henry.com", "HenryHill", role);
    expect(engineer.getRole()).toBe(role);
});