const Manager = require('../lib/Manager');


test("setting office number", () => {
    const testValue = "10";
    const employee = new Manager("Haider", 11, "testing@bootcamp.co.uk", testValue);
    expect(employee.officeNumber).toBe(testValue);
})

test("get Role function", () => {
    const testValue = "Manager";
    const employee = new Manager("Haider", 11, "testing@bootcamp.co.uk", 100);
    expect(employee.getRole()).toBe(testValue);
})

test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const employee = new Manager("Haider", 11, "testing@bootcamp.co.uk", testValue);
    expect(employee.getOfficeNumber()).toBe(testValue);
  });