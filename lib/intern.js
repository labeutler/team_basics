// Where to pull basic info from
const employee = require("./employee");

class intern {
    constructor(name, id, email, school) {
        super (name, id, email);
        //calling github info for interns
        this.school = school;
    }
    //return github info for interns
    getSchool () {
        return this.school;
    }
    //overiding employee position for interns
    getRole () {
        return 'Intern';
    }
}
// experting info
module.exports = intern;