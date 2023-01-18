const Employee = require('../lib/employee');

//create test for creating an employee
test("Can it create an Employee occurance?", () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe("object");
});

//create test for confirming name
test("Confirm the name is a string", () => {
    const name = "Laura";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

//create test for confirming id
test("Confirm id is not a negative", () => {
    const id = 1234;
    const employee = new Employee("Laura", id);
    expect(employee.id).toBe(id);
});

//create test for email requirements
test("Confirm email includes all requirements", () => {
    const email = "sample@sample.com";
    const employee = new Employee("Laura", 1234, email);
    expect(employee.email).toBe(email);
});

//create pulls from employee.js to "get" info
test("Confirm name is pulled from getName", () => {
    const testing = "Laura";
    const employee = new Employee(testing);
    expect(employee.getName).toBe(testing);
});

test("Confirm id is pulled from getId", () => {
    const testing = 1234;
    const employee = new Employee("Laura", testing);
    expect(employee.getId).toBe(testing);
});

test("Confirm email is pulled from getEmail", () => {
    const testing = "test@test.com";
    const employee = new Employee("Laura", 1234, testing);
    expect(employee.getEmail).toBe(testing)
});