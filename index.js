// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require(generateMarkdown.js)

// TODO: Create an array of questions for user input
const questions = [
    //name of project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
