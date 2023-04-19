// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license===null) {
    license ='';
  } else {
    return `![License: ${license}](https://img.shields.io/badge/license-${license}-blue)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===null) {
    license = '';
  } else {
    return '[License](#license)';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===null) {
    license = '';
  } else {
    return '## Licensing';
  }
}

function renderGitHubLink(userName){
  if (userName===null) {
    userName = '';
  } else {
    return `[${userName}](https://github.com/${userName})`
  }
}
// TODO: Create a function to generate markdown for README
//if this doesnt work change data parameters to (description,instalation,usage,etc)
function generateMarkdown({title,description,installation,usage,credits,license,features,test,userName,email,url}) {
  return `
  # ${title}

  ${renderLicenseBadge(license)}

  ## Description
  
  ${description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - ${renderLicenseLink(license)}
  - [Features](#features)
  - [Testing](#testing)
  - [Questions](#questions)
  
  ## Installation
 
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## Credits
  
  ${credits}
  
  ${renderLicenseSection(license)}
  
  ${license}
  
  ## Features
  
  ${features}

  ## Testing

  ${test}

  ##Questions

  If you have any Questions and would like to reach me, my information is below!
  
  - GitHub: ${renderGitHubLink(userName)}
  - Email: ${email}

`
}

module.exports = generateMarkdown;
