//employee is the primary for all who are listed and keeping all information listed.
class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //return information requested
    getName () {
        return this.name;
    }
    getId () {
        return this.id;
    }
    getEmail () {
        return this.email;
    }

    //confirm employee position
    getRole () {
        return 'Employee';
    }
};

//export information
module.exports = employee;