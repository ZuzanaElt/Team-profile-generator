// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
 const Employee = require ('./Employee')

 class Manager extends Employee {
   constructor(nameEm, id, email,officeNumber){
    super(nameEm, id, email);
    this.officeNumber = officeNumber;
   }
    
//    function getRole(answer){
//     return
//         const roleMan= ${answer.role}
//     };
    getOfficeNumber(){

    }
}

 
 module.exports = {Manager}