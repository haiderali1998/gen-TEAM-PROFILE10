const Intern = require("../lib/Intern")

test("Get school via constructor", () => {
  const testValue = "University Of Birmingham";
  const employee = new Intern("John", 11, "test@john.com", testValue);
  expect(employee.school).toBe(testValue);
});

test("getRole()", () => {
  const testValue = "Intern";
  const employee = new Intern("Haider", 11, "testing@bootcamp.co.uk", testValue);
  expect(employee.getRole()).toBe(testValue);
});

test("getSchool()", () => {
  const testValue = "University Of Birmingham";
  const employee = new Intern("Haider", 11, "testing@bootcamp.co.uk", testValue);
  expect(employee.getSchool()).toBe(testValue);
});