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
            type: 'input',
            message: "team manager's name",
            name: 'Name of manager',
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
        {
            type: 'input',
            message: "manager's office number",
            name: 'Office number',
        },

    ])
 .then(answers => {
    console.log (answers);
    //
    checkingNewEmployeeRole();
    
        
 } )


//  const readmeTemplate = generateMarkdown(answers);
//             // function to write README file
//             fs.writeFile('../README.md', readmeTemplate , (error) => { 
//                 return error
//                 ? console.error(error)
//                 : console.log('Your README file is now generated');
//             });


 checkingNewEmployeeRole =() => {
    inquirer
    .prompt ([
        {
            type: 'rawlist',
            name: 'employmentRole',
            message: 'Next employee - who do you want to add?',
            choices:['engineer', 'intern','finish bulding the team'],
        },
    ])
    .then (answers2 => {
        if (answers2.employmentRole === 'engineer'){
             nextRole = 'engineer'
            console.log("add an engineer")
            const newEngineer = new Engineer(answers)
        } else if (answers2. employmentRole === 'intern'){
            nextRole = 'engineer'
            console.log("add an intern")
            console.log(nextRole)}
        else {
           nextRole='none'
            console.log('thank you for updating your team information')}
        })
}