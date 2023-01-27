// Building the page showing team results
const createTeam = team => {
    //Blocks to contain manager, engineer and intern

    const createManager = manager => {
        return `
        <div class="row">
        <div class="col-md-4 mb-5">
            <div class="card h-100">
                <div class="card-body">
                    <h4 class="card-title">${manager.getName()}</h4>
                    <h3 class="card-title">${manager.getRole()}</h4>
                </div>
                <div class="card-body">
                    <ul class="list-group'>
                        <li class="list-group-item"> ID: ${manager.getId()}</li>
                        <li class="list-group-item"> Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item"> GitHub: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        </div>`
    };

    const createEngineer = engineer => {
        return `             
        <div class="row">
        <div class="col-md-4 mb-5">
            <div class="card h-100">
                <div class="card-body">
                    <h4 class="card-title">${engineer.getName()}</h4>
                    <h3 class="card-title">${engineer.getRole()}</h4>
                </div>
                <div class="card-body">
                    <ul class="list-group'>
                        <li class="list-group-item"> ID: ${engineer.getId()}</li>
                        <li class="list-group-item"> Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item"> GitHub: <a href="https://github.com/${engineer.getGithub()} target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        </div>`
    };

    const createIntern = intern => {
        return `
        <div class="row">
        <div class="col-md-4 mb-5">
            <div class="card h-100">
                <div class="card-body">
                    <h4 class="card-title">${intern.getName()}</h4>
                    <h3 class="card-title">${intern.getRole()}</h4>
                </div>
                <div class="card-body">
                    <ul class="list-group'>
                        <li class="list-group-item"> ID: ${intern.getId()}</li>
                        <li class="list-group-item"> Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item"> School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
    };


    //Enter array of information that will be going onto HTML for manager, engineer and intern
    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
    );

    // Required export for page
    module.exports = team => {
        return `
    <!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Business Frontpage - Start Bootstrap Template</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/styles.css" rel="stylesheet" />
    </head>
    
    <body>
        <header class="bg-primary py-5 mb-5">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-lg-12">
                        <h1 class="display-4 text-white mt-5 mb-2">Full Team</h1>
                    </div>
                </div>
            </div>
        </header>
        };
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#!">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    ${createTeam(team)}
                </div>
            </div>
        </nav>
    </body>
</html>
`
    };
};