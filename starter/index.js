const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

let team=[]


const employeeData =[
    {
        type: 'input',
        message: "employee's name",
        name: 'name',
    },
    {
        type: 'input',
        message: "email",
        name: 'email',
    },
    
    {
        type: 'input',
        message: "employee ID",
        name: 'id',
    },
];

const managerQ = [
    {
        type: 'input',
        message: "employee's name",
        name: 'name',
    },
    {
        type: 'input',
        message: "email",
        name: 'email',
    },
    
    {
        type: 'input',
        message: "employee ID",
        name: 'id',
    },
    {
        type: 'input',
        message: "Office number",
        name: 'officeNumber',
    },
];

const engineerData = [
    {
        type: 'input',
        message: "employee's name",
        name: 'name',
    },
    {
        type: 'input',
        message: "email",
        name: 'email',
    },
    
    {
        type: 'input',
        message: "employee ID",
        name: 'id',
    },
    {
        type: 'input',
        message: "Github username",
        name: 'github',
    },
];

const internData = [
    {
        type: 'input',
        message: "employee's name",
        name: 'name',
    },
    {
        type: 'input',
        message: "email",
        name: 'email',
    },
    
    {
        type: 'input',
        message: "employee ID",
        name: 'id',
    },
    {
        type: 'input',
        message: "School",
        name: 'school',
    },
]
// TODO: Write Code to gather information about the development team members, and render the HTML file.
function nextEmployee (){

            
    inquirer
        .prompt([
            {
                type: 'rawlist',
                name: 'role',
                message: "choose next employee's role",
                choices: ['engineer', 'intern','finish building the team'],
            },
        ])
        .then(roleChoice => {
            console.log('chosen next role is: ',roleChoice)
            if (roleChoice.role ==='engineer'){
                inquirer
                    .prompt(engineerData)
                    .then(engineerAns =>{
                        let engineer = new Engineer(engineerAns.name, engineerAns.id, engineerAns.email, engineerAns.github)
                        console.log ('engineer: ', engineer)
                        team.push(engineer)
                        console.log('team with manager and engineer: ', team)
                        nextEmployee()
                    })
            }else if (roleChoice.role ==='intern'){
                inquirer
                    .prompt(internData)
                    .then(internAns =>{
                        let intern = new Intern (internAns.name, internAns.id, internAns.email, internAns.school)
                        console.log ('intern: ', intern)
                        team.push(intern)
                        console.log('team with manager and intern: ', team)
                        nextEmployee()
                        //need to add to array of team
                    })
            } else {
                console.log ('team without addition',team)
                console.log('html needs to be generated here')
                return
            }


        })
}

inquirer
    .prompt( managerQ)
    .then(answers => {
           console.log('answers facts are: ',answers);

            let manager = new Manager(answers.name, answers.id, answers.email,answers.officeNumber);
            console.log('manager is: ', manager);

            //
            team.push(manager)
            console.log('team is with manager: ', team)
            nextEmployee();
            
        })
        




        //fs.writeFile(outputPath,render(manager),'utf-8',(error) => {
                // return error
                // ?console.log(error)
                // :console.log ('SO THIS WORKED..WOW',managerNew)
                // })
            


//  const readmeTemplate = generateMarkdown(answers);
//             // function to write README file
//             fs.writeFile('../README.md', readmeTemplate , (error) => { 
//                 return error
//                 ? console.error(error)
//                 : console.log('Your README file is now generated');
//             });

