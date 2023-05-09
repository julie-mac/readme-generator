// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your application.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your application.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your application.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for the application.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please describe how to test the application.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the application licensed under? Please select one of the following options:',
        choices: [
            'MIT License', 
            'GNU General Public License v3.0', 
            'Apache License 2.0', 
            'Mozilla Public License 2.0',
            'No License'
        ],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, function (err) {
        err ? console.log(err) : console.log('Your README has been created.')
})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('README.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();