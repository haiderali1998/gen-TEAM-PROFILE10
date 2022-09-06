
const Engineer = require("../lib/Engineer")

test("Set up GitHub via a constructor", () => {
    const testValue = "GithubUN";
    const employee = new Engineer("Haider", 11, "testing@bootcamp.co.uk", testValue);
    expect(employee.github).toBe(testValue);
})

test("getRole()", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Haider", 11, "testing@bootcamp.co.uk", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get gitHub", () => {
    const testValue = "GithubUN";
    const employee = new Engineer("Haider", 11, "testing@bootcamp.co.uk", testValue);
    expect(employee.getGitHub()).toBe(testValue);
}) 