// Where to pull basic info from
const employee = require("./employee");

//create engineer constructor to pull employee info from employee.js
class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        //calling github info for engineers
        this.github = github;
    }

    //return github info for engineers
    getGithub() {
        return this.github;
    }
    //overiding employee position for engineers
    getRole() {
        return 'Engineer';
    }
}
// experting info
module.exports = engineer;