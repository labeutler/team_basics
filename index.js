
//const classes 
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

//npm packages required
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

//per error message stating "rendor is not defined", adding generateTeam const to show the output
const renderTeam = require('./src/helper');
//const { create } = require('domain');

//create a team array
const teamArray = [];
//const roleArray = [];

//create a function to create the manager of the team
//function teamApp() {


    function addManager() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Team members name:",
                    name: "managerName"
                },
                {
                    type: "input",
                    message: "Team members employee ID:",
                    name: "managerId",
                },
                {
                    type: "input",
                    message: "Team members email address:",
                    name: "managerEmail"
                },
                {
                    type: "input",
                    message: "Managers Office Number:",
                    name: "managerNumber"
                },
            ])
            .then((answers) => {
                const manager = new Manager(
                    answers.managerName,
                    answers.managerId,
                    answers.managerEmail,
                    answers.managerNumber
                );
                teamArray.push(manager);
                //roleArray.push(answers.managerId);
                createTeam();
            });
    }

    //manager can now create a team, function to create team
    function createTeam() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'next',
                    message: "What type of employee would you like to add to your team?",
                    choices: ["Manager", "Engineer", "Intern", "No additional members."],
                }
            ])
            .then(function (userChoice) {
                switch (userChoice.next) {
                    case "Manager":
                        addManager();
                        break;
                    case 'Engineer':
                        addEngineer();
                        break;
                    case 'Intern':
                        addIntern();
                        break;
                    default:
                        teamBuilder();
                }
            })
    }
    //create a function if adding an Engineer is selected, the questions to prompt.
    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Team members name:",
                    name: "engineerName"
                },
                {
                    type: "input",
                    message: "Team members employee ID:",
                    name: "engineerId"
                },
                {
                    type: "input",
                    message: "Team members email address:",
                    name: "engineerEmail"
                },
                {
                    type: "input",
                    message: "Engineers GitHub ID:",
                    name: "engineerGithub"
                },
            ])
            .then((answers) => {
                const engineer = new Engineer(
                    answers.engineerName,
                    answers.engineerId,
                    answers.engineerEmail,
                    answers.engineerGithub,
                );
                teamArray.push(engineer);
                //roleArray.push(answers.engineerId);
                createTeam();
            });
    }

    //Create function if Intern is selected.
    function addIntern() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Team members name:",
                    name: "internName"
                },
                {
                    type: "input",
                    message: "Team members employee ID:",
                    name: "internId"
                },
                {
                    type: "input",
                    message: "Team members email address:",
                    name: "internEmail"
                },
                {
                    type: "input",
                    message: "Interns school:",
                    name: "internSchool"
                },
            ])
            .then((answers) => {
                const intern = new Intern(
                    answers.internName,
                    answers.internId,
                    answers.internEmail,
                    answers.internSchool,
                );
                teamArray.push(intern);
                //roleArray.push(answers.internId);
                createTeam();
            });
    }


//Function if no other team members are needed

function teamBuilder() {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    } else {
        fs.writeFileSync(distPath, renderTeam(teamArray), 'utf-8');
        console.log('Team HTML file created');
    }
}

function startApp() {
    addManager();
}
startApp();
