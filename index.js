const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the team managers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the managers name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team managers id number?',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ('Please enter the managers id number!')
                    return false;
                } else {
                    return true;
                }
            }
        }

    ])
}





