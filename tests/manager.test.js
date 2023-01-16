const Manager = require('../lib/manager');

describe("Manager", () => {
    describe("Employee", () => {
        it("should create on object with name, id and email if provided valid arguments.", () => {
            const manager = new Manager("Fred", 1111, "fred@testemail.com");
            expect(manager.name).toEqual("Fred");
            expect(manager.id).toEqual(1111);
            expect(manager.email).toEqual("fred@testemail.com");
        });
        
        it("should throw an error if provided no arguments", () => {
            const nm = () => new Manager();

            expect(nm).toThrow();
        });
        
        it("should throw an error if id is not provided", () => {
            const nm = () => new Manager("Fred", '', "fred@testemail.com");
            const err = new Error("expected parameter 'id' to be a non-negative number");

            expect(nm).toThrowError(err);
        });

        it("should throw an error if 'name' is not a string", () => {
            const nm = () => new Manager(1234, '1111', "fred@testemail.com");
            const err = new Error("expected parameter 'name' to be an    empty string");

            expect(nm).toThrowError(err);
        });

        it("should throw an error if 'email' is not a string", () => {
            const nm = () => new Manager("Fred", 1111, email);
            const err = new Error("expected parameter 'email' to be string");

            expect(nm).toThrowError(err);
        });
    });
});