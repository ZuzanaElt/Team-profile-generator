// TODO: Write code to define and export the Intern class.  
//HINT: This class should inherit from Employee.
const Employee = require ('./Employee')

class Intern extends Employee {
   constructor(nameEm, id, email, school){
   super(nameEm, id, email );
   this.gitHubUserName = gitHubUserName;
  }
   
   getSchool(){
       console.log("getGitHub method in employee")
    };
   getRole(){
    
    };
}


module.exports = Intern;