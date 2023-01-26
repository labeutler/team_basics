const Intern = require('../lib/intern');

// Test to see if information pulls from school, (name, id, email & school)
test("Intern school constructor", () => {
    const sample = "school";
    const si = new Intern("Fred", 123, "fred@sample.com", sample);
    expect(si.school).toBe(sample);
});

test("Intern getRole constructor", () => {
    const sample = "Intern";
    const si = new Intern("Fred", 123, "fred@sample.com", "school");
    expect(si.getRole()).toBe(sample);
});

test("Intern getSchool constructor", () => {
    const sample = "school";
    const si = new Intern("Fred", 123, "fred@sample.com", sample);
    expect(si.getSchool()).toBe(sample);
});