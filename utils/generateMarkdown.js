// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  else if (license === "GNU General Public License v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  else if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (license === "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  else {
    return "";
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return "[Click here to view the MIT license](https://opensource.org/license/mit/)";
  }
  else if (license === "GNU General Public License v3.0") {
    return "[Click here to view the GNU General Public License 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)";
  }
  else if (license === "Apache License 2.0") {
    return "[Click here to view the Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)"
  }
  else if (license === "Mozilla Public License 2.0") {
    return "[Click here to view the Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)"
  }
  else {
    return "";
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "No License") {
    return `## License
    This project is licensed under the ${license}.`
  } else {return ""};
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
    
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution Guidelines](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Description

  ${data.description}
  
  ## Installation
  
  ${data.installation}

  ## Usage
  
  ${data.usage}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Contribution Guidelines

  ${data.contribution}
 
  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions about the application, please feel free to reach out via email: ${data.email}
  Made by ${data.username}
`
}

module.exports = generateMarkdown;
