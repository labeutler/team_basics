const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("Employee", () => {
        it("should create on object with name, id and email if provided valid arguments.", () => {
            const engineer = new Engineer("Fred", 1111, "fred@testemail.com");
            expect(engineer.name).toEqual("Fred");
            expect(engineer.id).toEqual(1111);
            expect(engineer.email).toEqual("fred@testemail.com");
        });
        
        it("should throw an error if provided no arguments", () => {
            const ne = () => new Engineer();

            expect(ne).toThrow();
        });
        
        it("should throw an error if id is not provided", () => {
            const ne = () => new Engineer("Fred", '', "fred@testemail.com");
            const err = new Error("expected parameter 'id' to be a non-negative number");

            expect(ne).toThrowError(err);
        });

        it("should throw an error if 'name' is not a string", () => {
            const ne = () => new Engineer(1234, '1111', "fred@testemail.com");
            const err = new Error("expected parameter 'name' to be an    empty string");

            expect(ne).toThrowError(err);
        });

        it("should throw an error if 'email' is not a string", () => {
            const ne = () => new Engineer("Fred", 1111, email);
            const err = new Error("expected parameter 'email' to be string");

            expect(ne).toThrowError(err);
        });
    });
});