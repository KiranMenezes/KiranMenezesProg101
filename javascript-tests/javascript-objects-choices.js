var person = {
    firstName: "Kiran", 
    lastName: "Menezes",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};


var calculator = {
    operand01: -1, 
    operand02: -1,
   
    add : function() {
        return this.operand01 + this.operand02;
    },
    subtract : function() {
        return this.operand01 - this.operand02;
    }
};

calculator.multiply = function(p1,p2) {
    return p1 * p2; 
}

function divider(title) {
    console.log("\n====================================");
    console.log(title);
    console.log("====================================\n");
}

calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;

divider('Person');
console.log('First Name:', person.firstName);
console.log('Last Name:', person.lastName);
console.log('Full Name:', person.fullName());

divider('Calculator');
console.log('operand01 is the length of firstName:', person.firstName.length);
console.log('operand02 is the length of lastName:', person.lastName.length);
console.log('Add length of firstName and lastName:', calculator.add());
console.log('Subtract length of firstName and lastName:',calculator.subtract());
console.log('Multiply length of first anhd lastNames:',calculator.multiply(calculator.operand01, calculator.operand02));

