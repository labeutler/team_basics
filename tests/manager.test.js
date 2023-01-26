const Manager = require('../lib/manager');

// Test to see if information pulls office number, (name, id, email & office number)
test("Manager's office number constructor", () => {
    const sample = "officeNumber";
    const on = new Manager("Fred", 123, "fred@sample.com", sample);
    expect(on.officeNumber).toBe(sample);
});

test("Manager's getOfficeNumber constructor", () => {
    const sample = "Manager";
    const on = new Manager("Fred", 123, "fred@sample.com", "officeNumber");
    expect(on.getRole()).toBe(sample);
});

test("Intern getSchool constructor", () => {
    const sample = "officeNumber";
    const on = new Manager("Fred", 123, "fred@sample.com", sample);
    expect(on.getOfficeNumber()).toBe(sample);
});