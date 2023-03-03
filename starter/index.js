const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer
    .prompt([
        {
            type: 'confirm',
            message: "Are you ready to set-up your team?",
            name: 'ready',
        }
        

    ])
 .then(answer => {
        if (answer.ready === false){              
            console.log('Oh well, maybe next time')
        } 
        else {
            console.log("Let's create a new team. Let's start with your manager:")
        
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: "employee's name",
                    name: 'Name of employee',
                },
                {
                    type: 'input',
                    message: "employee ID",
                    name: 'employee ID',
                },
                {
                    type: 'input',
                    message: "Email address",
                    name: 'email',
                },
               
            ])
        .then(answer2 => {
            const managerInfo = answer2;
            console.log("manager data", managerInfo)
        })
        
        }
        })
    

