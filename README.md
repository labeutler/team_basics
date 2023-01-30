# Team Basics
Generator to provide teams basic information.  Providing name, ID number, email and, depending on the department, office number for managers, GitHub link for engineers and School for interns.

## Description

### User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

### Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation

You can find this project by going to this link here:

[GitHub Repository](https://github.com/labeutler/team_basics)

## Usage

Please watch the video walkthrough that will demonstrate the following:
* All four tests passing in the command line.
* How the user will invoke the application from the command line.
* How a user will ener their responses to all the prompts for the application.
* How the HTML fill will match the users input.

[![Video walkthrough](./dist/team.html)](https://youtu.be/ztX2lrAgo00)


Example of the HTML that will present with results added to the command line prompts.
![alt text](/dist/assets/images/sampleHTML.png)

## Credits


[Instruct to pull info from GitHub](https://www.elegantthemes.com/blog/wordpress/rel-noopener-noreferrer-nofollow)

[Helper with const HTML to push employees](https://www.w3schools.com/js/js_const.asp)

Bootstrap for HTML coding

Use of @askBCS Learning Assistant

## License

[MIT](https://choosealicense.com/licenses/mit/)

---