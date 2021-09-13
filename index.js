// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

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
        name: 'credits',
        message: "List your collaborators, if any, with links to their GitHub profiles.",
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
        choices:  [
            "Apache",
            "GPL",
            "ISC",
            "MIT",
            "Mozilla",
        ],
        message: 'Choose a license for your project.',
    }, 
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        default: ''
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        default: ''
    }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if(error){
            console.error(error);
        }else{
            console.log(`Markdown successfully written to file - ${fileName}`)
        }
    })
}

// TODO: Create a function to initialize app
async function init() {
    // prompt user to answer questions
    var responses = await inquirer.prompt(questions);
    const markDown = generateMarkdown(responses);
    writeToFile('README.md', markDown);
}

// Function call to initialize app
init();
