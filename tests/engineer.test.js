const Engineer = require('../lib/engineer');

// Test to see if information pulls from GitHub, (name, id, email & github)
test("Engineer GitHub constructor", () => {
    const sample = "userName";
    const ne = new Engineer("Fred", 123, "fred@sample.com", sample);
    expect(ne.github).toBe(sample);
});

test("Engineer getRole constructor", () => {
    const sample = "Engineer";
    const ne = new Engineer("Fred", 123, "fred@sample.com", "userName");
    expect(ne.getRole()).toBe(sample);
});

test("Engineer getGitHub constructor", () => {
    const sample = "userName";
    const ne = new Engineer("Fred", 123, "fred@sample.com", sample);
    expect(ne.getGithub()).toBe(sample);
});