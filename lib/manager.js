// Where to pull basic info from
const employee = require("./employee");

class manager {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        //calling officeNumber info for Management
        this.officeNumber = officeNumber;
    }

    //return github info for Managers
    getGithub () {
        return this.officeNumber;
    }
    //overiding employee position for managers
    getRole () {
        return 'Manager';
    }
}
// experting info
module.exports = manager;