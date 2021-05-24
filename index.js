// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    //name of project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                return false;
            }
        }
    },

    //description

    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                return false;
            }
        }
    },

    //installation

    {
        type: 'input',
        name: 'installation',
        message: 'How is this project installed?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    //usage
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                return false;
            }
        }
    },

    //license

    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Please select a license for your project',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                return false;
            }
        }
    },

    //contributing

    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    
    //tests

    {
        type: 'input',
        name: 'testing',
        message: 'How can you test this project?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                return false;
            }
        }
    },

    //questions

    {
        type: 'input',
        name: 'questions',
        message: 'What should we do if we have questions about the project?',
        validate: questionInput => {
            if (questionInput) {
                return true;
            } else {
                return false;
            }
        }
    },

    //github username

    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                return false;
            }
        }
    },

    //email

    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Information added to README')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
