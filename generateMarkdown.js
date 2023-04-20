// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license===null) {
    license ='';
  } else {
    return `[![License: ${license}](https://img.shields.io/badge/license-${license}-blue)](https://opensource.org/license/${license}/)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {
  //if (license===licenseArr[0]){
    //return `[${licenseArr[0]}](https://opensource.org/licenses/Apache-2.0)`
  //} else if (license===licenseArr[1]){
   // return `[${licenseArr[1]}](https://opensource.org/license/mit/)`
  //} else if (license===licenseArr[2]){
   // return `[${licenseArr[2]}](https://opensource.org/license/ms-pl-html/)`
  //} else if (license===licenseArr[3]){
   // return `[${licenseArr[3]}](https://opensource.org/license/gpl-2-0/)`
 // } else if (license===licenseArr[4]){
   // return `[${licenseArr[4]}](https://opensource.org/license/epl-2-0/)`
 // } else {
   // return '';
////  }
//}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===null) {
    license = '';
  } else {
    return `Read more about ${license} by clicking `;
  }
}

function renderGitHubLink(userName){
  if (userName===null) {
    userName = '';
  } else {
    return `[${userName}](https://github.com/${userName})`
  }
}

function creditAppend(credit){
  if (credit===false){
    credit = '';
  } else {
    return `[ - ${credit}](https://github.com/${credit})`;
  }
}
// TODO: Create a function to generate markdown for README
//if this doesnt work change data parameters to (description,instalation,usage,etc)
function generateMarkdown({title,description,installation,usage,credit,license,features,test,userName,email}) {
  return `
  # ${title}

  ### Badge
  ${renderLicenseBadge(license)}

  ## Description
  
  ${description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Testing](#testing)
  - [Questions](#questions)
  
  ## Installation
 
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## Credits

  ${creditAppend(credit)}
  
  ## License
  
  ${renderLicenseSection(license)}[here!](https://opensource.org/license/${license}/)
  
  ## Features
  
  ${features}

  ## Testing

  ${test}

  ## Questions

  If you have any Questions and would like to reach me, my information is below!
  
  - GitHub: ${renderGitHubLink(userName)}
  - Email: ${email}

`
}

module.exports = generateMarkdown;
