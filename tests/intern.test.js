const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("Employee", () => {
        it("should create on object with name, id and email if provided valid arguments.", () => {
            const intern = new Intern("Fred", 1111, "fred@testemail.com");
            expect(intern.name).toEqual("Fred");
            expect(intern.id).toEqual(1111);
            expect(intern.email).toEqual("fred@testemail.com");
        });
        
        it("should throw an error if provided no arguments", () => {
            const ni = () => new Intern();

            expect(ni).toThrow();
        });
        
        it("should throw an error if id is not provided", () => {
            const ni = () => new Intern("Fred", '', "fred@testemail.com");
            const err = new Error("expected parameter 'id' to be a non-negative number");

            expect(ni).toThrowError(err);
        });

        it("should throw an error if 'name' is not a string", () => {
            const ni = () => new Intern(1234, '1111', "fred@testemail.com");
            const err = new Error("expected parameter 'name' to be an    empty string");

            expect(ni).toThrowError(err);
        });

        it("should throw an error if 'email' is not a string", () => {
            const ni = () => new Intern("Fred", 1111, email);
            const err = new Error("expected parameter 'email' to be string");

            expect(ni).toThrowError(err);
        });
    });
});