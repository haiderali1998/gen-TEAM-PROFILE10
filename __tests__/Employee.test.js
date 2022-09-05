const Employee = require("../lib/Employee")
test("Employee must be an object", () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe("object")
})
test("Employee name should work", () => {
    const employee = new Employee("Haider")
    expect(employee.name).toBe("Haider")
})