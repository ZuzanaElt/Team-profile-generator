// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require ('./Employee')

class Engineer extends Employee {
    constructor(nameEm, id, email, gitHubUserName){
   super(nameEm, id, email );
   this.gitHubUserName = gitHubUserName;
  }
   
   getGitHub(){
       console.log("getGitHub method in employee")
    };
   getRole(){
    
    };
}

// const newEngineer = new Engineer(answersEN.nameEm, answersEN.id, answersEn.email, )

module.exports = Engineer