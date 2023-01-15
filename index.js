// call information needed for employee
//const Empoloyee = require('./lib/employee')
//const classes 
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

//list of employees
// const Employee = {
//     Intern: "Intern",
//     Engineer: "Engineer",
//     Manager: "Manager",
// };

// employee.getName('name');
// employee.getId('id');
// employee.getEmail('email');
// employee.getRole('Employee');

//npm packages required
const inquirer = require('inquirer');
const fs = require('fs');
//const { wrap } = require('module');
const path = require('path');


//create a team array
const teamArray = [];
const roleArray = [];

//create a function to create the manager of the team
function teamApp() {
    function createManager() {
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
                    name: "managerId"
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
                roleArray.push(answers.managerId);
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
                    choices: ["Engineer", "Intern", "No additional members."],
                },
            ])
            .then((userChoice) => {
                switch (userChoice.next) {
                    case 'Engineer':
                        addEngineer();
                        break;
                    case 'Intern':
                        addIntern();
                        break;
                    case 'None':
                        buildTeam();
                }
            });
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
                    roleArray.push(answers.engineerId);
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
                    roleArray.push(answers.internId);
                    createTeam();
                });
    }
}


//create list of who's being added
// const roleQuestions = [
//     {   
//         type: 'list',
//         name: 'employeeRolePrompt',
//         message: "What type of employee would you like to add to your team?",
//         choices: ["Manager", "Engineer", "Intern", "No additional members."]
//     }
// ];

//create HTML card using (e) to create an automatic event listener when creating a function.
const writeHtml = (e) => {
    let roleQuestions;
    let employeeRolePrompt = "";
    //use of switch to listen for the event
    switch (e.getRole()) {
        case Employee.Manager:
            roleInfo = `<class="bi bi-number"> Office: ${e.number}`;
            employeeRolePrompt = "bg-primary bg-gradient text-light";
            break;
        case Employee.Intern:
            roleInfo = `<class="bi bi-school"> School: ${e.school}`;
            employeeRolePrompt = "bg-primary bg-gradient text-light";
            break;
        case Employee.Engineer:
            roleInfo = `<class="bi bi-github"> GitHub: ${e.github}`;
            employeeRolePrompt = "bg-primary bg-gradient text-light";
            break;
    }

    //return what we are calling
    return `<div class="col-sm12 col-lg-6">
    <div class='card'>
        <div class="card-header ${employeeRolePrompt}">
            <h4 class='card-title'>
            ${e.getName().toUpperCase()}
            </h4>
        </div>
        <div class='card-body'>
            <ul class='list-group'>
                <li class='list-group-item'>
                    Role: ${e.getRole()}
                </li>
                <li class='list-group-item'>
                    id: ${e.getId()}
                </li>
                <li class='list-group-item'>
                    email: ${e.getEmail()}
                </li>
                <li class='list-group-item list-group-item-secondary'>
                    ${roleInfo}
                </li>
            </ul>
        </div>
    </div>
</div>`;
};

//construct employee information in an array

//Management role questions
// const managerQuestions = [
//     {
//         type: "input",
//         message: "Team members name:",
//         name: "name"
//     },
//     {
//         type: "input",
//         message: "Team members employee ID:",
//         name: "id"
//     },
//     {
//         type: "input",
//         message: "Team members email address:",
//         name: "email"
//     },
//     {
//         type: "input",
//         message: "Managers Office Number:",
//         name: "number"
//     },
    // {
    //     type: 'list',
    //     name: 'next',
    //     message: "What type of employee would you like to add to your team?",
    //     choices: ["Manager", "Engineer", "Intern", "No additional members."]
    // }
// ];

//Engineer role questions
// const engineerQuestions = [
//     {
//         type: "input",
//         message: "Team members name:",
//         name: "name"
//     },
//     {
//         type: "input",
//         message: "Team members employee ID:",
//         name: "id"
//     },
//     {
//         type: "input",
//         message: "Team members email address:",
//         name: "email"
//     },
//     {
//         type: "input",
//         message: "Engineers GitHub ID:",
//         name: "github"
//     },
//     {
//         type: 'list',
//         name: 'next',
//         message: "What type of employee would you like to add to your team?",
//         choices: ["Manager", "Engineer", "Intern", "No additional members."]
//     }
// ];

//Interns role questions
// const internQuestions = [
//     {
//         type: "input",
//         message: "Team members name:",
//         name: "name"
//     },
//     {
//         type: "input",
//         message: "Team members employee ID:",
//         name: "id"
//     },
//     {
//         type: "input",
//         message: "Team members email address:",
//         name: "email"
//     },
//     {
//         type: "input",
//         message: "Interns school:",
//         name: "school"
//     },
//     {
//         type: 'list',
//         name: 'next',
//         message: "What type of employee would you like to add to your team?",
//         choices: ["Manager", "Engineer", "Intern", "No additional members."]
//     }
// ];

//start process to add members
function ask(questionArr) {
    inquirer
        .createPromptModule(questionArr)
        .then((member) => {
            team.push(member);
            //add manager
            if (member.next === 'Engineer') {
                ask(engineerQuestions);
            } else if (member.next === 'Intern') {
                ask(internQuestions);
            } else {
                profiles(team);
            }
        })
        .catch((err) => console.log(err));
}

//create team profiles
function profiles(team) {
    //for all members
    const profiles = team.map((member) => {
        const { name, id, email } = member;

        //for managers, office number is required
        if (member.status('officeNumbe')) {
            const { officeNumber } = member;
            return new Manager(name, id, email, officeNumber);
        }

        //for engineers, github is required
        if (member.status('github')) {
            const { github } = member;
            return new Engineer(name, id, email, github);
        }

        //for interns, school is required
        if (member.status('school')) {
            const { school } = member;
            return new Intern(name, id, email, school);
        }
    });

    //need HTML to put info
    const newHtml = profileCards(profileCards);

    writeHtml(newHtml);
};

//to create html
function writeHtml(newHtml) {
    fs.writeFile('./output/team.html', newHtml, (err) => {
        if (err) throw err;
    });
};