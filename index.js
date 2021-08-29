// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What's the title of your project?",
        default: "Title"
    },
    {
        type: 'input',
        name: 'description',
        message: "Give a description of your project.",
        default: "Description of project"
    }, 
    {
        type: 'input',
        name: 'installation',
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    }, 
    {
        type: 'input',
        name: 'usage',
        message: "Provide instructions and examples for use. Include screenshots as needed.",
    }, 
    {
        type: 'input',
        name: 'contributing',
        message: "Provide guidelines on how other developers can contribute to your project.",
    }, 
    {
        type: 'input',
        name: 'tests',
        message: "Provide any tests written for your application and provide examples on how to run them.",
    }, 
    {
        type: 'list',
        name: 'license',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        message: "Choose a license for your project.",
        default: 'MIT License'
    }, 
    {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
     
}

// Function call to initialize app
init();
