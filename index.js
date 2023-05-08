// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown.js');

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
        name: 'usage info',
        message: 'Please provide usage information for your application.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please provide any and all contributors that worked on this project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please describe how to test the application.',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What is the application licensed under? Please select one of the following options:',
        choices: [
            'MIT License', 
            'GNU General Public License v3.0', 
            'Apache License 2.0', 
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU General Public License v2.1',
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
    
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();