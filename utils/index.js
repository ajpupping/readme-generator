// These are the packages needed to run this program
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');
const fs =require('fs');

// List of questions for user to answer
const questions = [
    {
        type: 'input', 
        name: 'title',
        message: 'What is the title of your project?',
    }, 
    {
        type: 'input', 
        name: 'description',
        message: 'Enter a brief description of your project.',
    }, 
    {
        type: 'input', 
        name: 'installation',
        message: 'Provide installation instructions.',
    }, 
    {
        type: 'input', 
        name: 'usage',
        message: 'Explain how to use your project.',
    }, 
    {
        type: 'list', 
        name: 'license',
        message: 'Add a license for your project.',
        choices: [
            'No License',
            'Apache license 2.0', 
            'Common Development and Distribution License 1.0',
            'Eclipse Public License version 2.0',
            'GNU General Public License version 2',
            'GNU Lesser General Public License version 3',
            'Mozilla Public License 2.0',
            'The 2-Clause BSD License',
            'The 3-Clause BSD License',
            'The MIT License',
        ],
    }, 
    {
        type: 'input', 
        name: 'contribution',
        message: 'How can other developers contribute to this project?',
    }, 
    {
        type: 'input', 
        name: 'tests',
        message: 'Explain how to run tests for this project.',
    }, 
    {
        type: 'input', 
        name: 'username',
        message: 'What is you Github username?'
    }, 
    {
        type: 'input', 
        name: 'email', 
        message: 'Enter your email address.'
    },
];

// Write README file and check for errors
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
            return;
        }        
    });
};

// Display questions in terminal and then write to new readme file
function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        console.log(responses);
        return generateMarkdown(responses);
    })
    .then((generatedMarkdown) => {
        writeToFile('GeneratedREADME.md', generatedMarkdown);
        console.log('A new README file has been generated.')
    })
    .catch((error) => {console.log(error);
    })
} 

// Function call to initialize app
init();
