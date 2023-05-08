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
    return `# ${repoName}

    ## 07 Project 1: Interactive Front-End Application
    
    For our project, we are collaborating on an application to help the user learn a bit of both astrology and astronomy! 
    
    The two APIs we have leveraged are: **Horoscope Astrology** and **Planets Info by NewbAPI** which can both be found on RapidAPI. To tie the two together, we use the endpoint's key, "ruling_planet" from the Horoscope API, and pull a fact about the planet from the Planets Info API.
    
    With the data pulled from the form, we find the user's zodiac sign using their inputted birth month and day.
    The user’s zodiac sign will be put in as a query parameter in the Horoscope Astrology API, so that we can get the info specifically related to their zodiac sign. The different keys this returns that we will be using are: 'name', 'date range', 'symbol', 'element', 'compatibility', 'strengths', 'weaknesses', 'about', 'nature', 'health', 'love', 'relationships', and 'career'.
    We will also take the value of ‘ruling_planet’, and and pass it through a function to get the associated ID that the Plants Info API takes as one of their query parameters. The Planets Info API then provides us with some scientific information about the user’s ruling planet!
    
    The Horoscope Astrology API also has a fun end-point that we've also utilized to "Get three tarot card"s, which randomly generates 3 tarot cards for the user to read! The user can then even save their reading to view at a later time, such as if they would like to refer to it at a later time to compare their day to!
    
    
    
    ## Table of Contents
    
    - [Usage](#usage)
    - [Credits](#credits)
    - [Citations](#citations)
    - [License](#license)
    
    
    ## Deployment
    
    Link to gitHub project: **https://github.com/kemcclen/StarSigns**
    
    Link to deployed page: **https://kemcclen.github.io/StarSigns/**
    
    
    ## Requirements
    
    Here are the requirements for the Project:
    ### Project Requirements
    * Use a CSS framework ~~other than Bootstrap~~.
    * Be deployed to GitHub Pages.
    * Be interactive (i.e., accept and respond to user input).
    * Use at least two [server-side APIs](https://coding-boot-camp.github.io/full-stack/apis/api-resources).
    * Does not use alerts, confirms, or prompts (use modals).
    * Use client-side storage to store persistent data.
    * Be responsive.
    * Have a polished UI.
    * Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
    * Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
    
    ### Presentation Requirements
    * Elevator pitch: a one minute description of your application
    * Concept: What is your user story? What was your motivation for development?
    * Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?
    * Demo: Show your stuff!
    * Directions for Future Development
    * Links to the deployed application and the GitHub repository
    
    
    ## Usage
    
    ![Horoscope](./assets/screenshots/starsigns-main.png)
    
    Welcome to StarSigns, a horoscope webpage that teaches you about astrology and astronomy! 
    
    ![Horoscope](./assets/screenshots/StarSigns-mainInput.png)
    
    To start, please insert your name, birth date and birth month, then click submit. 
    
    ![Horoscope](./assets/screenshots/StarSigns-HoroscopePage.png)
    
    You'll then be direct to a page with information about your horoscope.
    
    ![Horoscope](./assets/screenshots/starsigns-planetInfo.png)
    
    And shown a fact about your ruling planet!  
    The layout also changes on different screen sizes.
    
    ![Horoscope](./assets/screenshots/starsigns-tarot.png)
    ![Horoscope](./assets/screenshots/starsigns-tarot-openCards.png)
    
    You can also get your tarot cards read! Please click on each card to flip them over. 
    
    ![Horoscope](./assets/screenshots/starsigns-tarot-savedReading.png)
    
    You can save your reading, by clicking the "Save Reading" button. When you would like to refer to it again later, you can click "Saved Reading" to show the previous cards again. Clicking the "Home" button at any point, will bring you to a refreshed main page. 
    
    
    ## Credits
    
    - [jaychan0125](https://github.com/jaychan0125)  - Joyce Chan
    - [julie-mac](https://github.com/julie-mac)  - Julie Macpherson
    - [kemcclen](https://github.com/kemcclen)  - Katharine McClenaghan
    - [matthew-millard](https://github.com/matthew-millard)  - Matthew Millard 
    - [shok1to](https://github.com/shok1to)  - Shoko Takahashi
    
    
    ## Citations
    
    Maqsood, A., Moatar, T., Krishna, &amp; Zhang, S. (2023). Lectures. 
    
    
    ## License
    
    Licensed under the MIT license.
    
    ---
    `
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();