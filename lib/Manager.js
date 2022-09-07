const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
       // this.title = "Manager"; (ask tutor)
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager; 