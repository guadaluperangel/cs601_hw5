//html id variables
var firstName;
var lastName;
var facilitator;
var submit;
var alphabetCheck;

//validate firstName is longer than 2 char
function validateName() {
    if (firstName.value.length >= 2 && firstName.value.match(alphabetCheck)) {
        return true;
    } else {
        alert("Please enter a firstname with two (2) or more characters.");
        firstName.focus();
        return false;
    }
}

//validate lastName is longer than 2 char
function validateLastName() {
    if (lastName.value.length >= 2 && lastName.value.match(alphabetCheck)) {
        return true;
    } else {
        alert("Please enter a lastname with two (2) or more characters.");
        lastName.focus();
        return false;
        
    }
}

//validate facilitator
function validateFacilitator () {
    if ((facilitator === "Laura") || (facilitator === "Fazil") || (facilitator === "Harsh")) {
        return true;
    } else {
        alert("Please enter a valid facilitator name.");
        facilitator.focus();
        return false; 
    }
}

//validate all fields
function checks () {

    //html id variables
    firstName = document.getElementById("firstName");
    lastName = document.getElementById("lastName");
    facilitator = document.getElementById("facilitator");
    submit = document.getElementById("submit");
    alphabetCheck = "[a-z]";


    validateFacilitator();
    validateLastName();
    validateName();
}