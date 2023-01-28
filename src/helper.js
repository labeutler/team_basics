// Building the page showing team results
const renderTeam = team => {
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
        </div>
        `;
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
        </div>
        `;
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
    </div>
    `;
    };


    //Enter array of information that will be going onto HTML for manager, engineer and intern
// function teamBuilder() {    
    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
    );
    return html.join("");
}

// Required export for page


//const createHTML = 

const render = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Team Basics<title>
    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="/dist/assets/favicon.ico" />
    <!-- Bootstrap icons-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />    
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="/dist/css/styles.css" rel="stylesheet" />
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
    
<body>
<header class="bg-dark py-5">
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">My Team</h1>
    
  </div>
</div>
</header>


    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                    ${renderTeam(team)}
                </div>
            </div>
        </div>
        
<!-- Bootstrap core JS-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<!-- Core theme JS-->
<script src="js/scripts.js"></script>
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
<!-- * *                               SB Forms JS                               * *-->
<!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>

</body>
<footer class="py-5 bg-dark">
    <div class="container px-5"><p class="m-0 text-center text-white">Copyright &copy; LAB 2023</p></div>
</footer>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

</html>
`;


 
};
module.exports = render;