const inquirer = require("inquirer");

//employee is the primary for all who are listed and keeping all information listed.
class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}