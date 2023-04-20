// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
{//10
    type:'input',
    message: 'What is your gitHub username?',
    name: 'userName',
    validate: userNameInput =>{
        if (userNameInput) {
            return true;
        } else {
            console.log('Please input your GitHub Username!');
            return false;
        }
    }
},
{//11
    type:'input',
    message: 'What is your email?',
    name: 'email',
    validate: emailInput =>{
        if (emailInput) {
            return true;
        } else {
            console.log('Please input your email!');
            return false;
        }
    }
},
{//1
    type:'input',
    message: 'What is your project name?',
    name: 'title',
    validate: titleInput =>{
        if (titleInput) {
            return true;
        } else {
            console.log('Please input your project name!');
            return false;
        }
    }
},
{//2
    type:'input',
    message: 'What is your motivation for creating this project/Why did you create this project? What does it do/solve? What did you learn?',
    name: 'description',
    validate: descriptionInput =>{
        if (descriptionInput) {
            return true;
        } else {
            console.log('Please describe why you created this project!');
            return false;
        }
    }
},
{//4
    type:'input',
    message: 'How does someone go about using your project?',
    name: 'usage',
    validate: usageInput =>{
        if (usageInput) {
            return true;
        } else {
            console.log('Please provide steps to using your project!');
            return false;
        }
    }
},
{//5
    type:'input',
    message: 'Did anyone else contribute to your project. If so, please provide their GitHub username.',
    name: 'credit'
},
{//8
    type:'input',
    message: 'What languages/features did you use on this project?',
    name: 'features',
    validate: featuresInput =>{
        if (featuresInput) {
            return true;
        } else {
            console.log('Please provide all languages and/or features used in this project!');
            return false;
        }
    }
},
{//3
    type:'input',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    name: 'installation',
    validate: installationInput =>{
        if (installationInput) {
            return true;
        } else {
            console.log('Please choose a license!');
            return false;
        }
    }
},
{//6                     LICENSE
    type:'list',
    message: 'Choose a license for your project (required).',
    name: 'license',
    choices: ['Apache', 'MIT', 'GNU', 'CDDL', 'EPL', 'BSD'],
    validate: licenseInput =>{
        if (licenseInput) {
            return true;
        } else {
            console.log('Please choose a license!');
            return false;
        }
    }
},
{//9                   TEST
    type:'input',
    message: 'How do you test your project?',
    name: 'test',
    validate: testInput =>{
        if (testInput) {
            return true;
        } else {
            console.log('Please provide directions to test your project');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'contribution',
    message: 'Please explain how other developers may contribute to your project.',
    validate: contributionInput => {
      if (contributionInput) {
        return true;
      } else {
        console.log('Please input how someone could contribute to your project');
        return false;
      }
    }
  }
];

// TODO: Create a function to write README file
function writeToFile(data) {
const fileName = './output/README.md';
    fs.writeFile(fileName, data, (err)=>{
        if (err) 
            return console.log('Sorry, there was an error: ' + err);
    console.log('Great Job! Your information has been transferred to the README')
    })
}
// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
   .then((data)=>{
        console.log(data)
        writeToFile(generateMarkdown(data))
   })
}

// Function call to initialize app
init();