const Employee = require("../lib/Employee")

test("Employee must be an object", () => {
    const employee = new Employee()
    expect(typeof (employee)).toBe("object")
})
test("Employee name should work", () => {
    const name = "Haider"
    const employee = new Employee(name)
    expect(employee.name).toBe(name)
})
test("Setting ID", () => {
    const testValue = 11;
    const employee = new Employee("Haider", testValue);
    expect(employee.id).toBe(testValue);
});
test("Setting the email", () => {
    const testValue = "testing@bootcamp.co.uk"
    const employee = new Employee("Haider", 11, testValue);
    expect(employee.email).toBe(testValue);
})

test("To getName()", () => {
    const testValue = "Haider";
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);
});

test("To getId()", () => {
    const testValue = 11;
    const employee = new Employee("Haider", testValue);
    expect(employee.getId()).toBe(testValue);
});

test("To getEmai", () => {
    const testValue = "testing@bootcamp.co.uk"
    const employee = new Employee("Haider", 11, testValue);
    expect(employee.getEmail()).toBe(testValue);
});
test('getRole()', () => {
    const testValue = "Employee"
    const employee = new Employee("Haider", 11, "testing@bootcamp.co.uk");
    expect(employee.getRole()).toBe(testValue);
})