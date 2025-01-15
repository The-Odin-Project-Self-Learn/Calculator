//define arithmetic functions
const addFunction = function(num1, num2) {
    return num1 + num2;
}
const subtractFunction = function(num1, num2) {
    return num1 - num2;
}
const multiplyFunction = function(num1, num2) {
    return num1 * num2;
}
const divideFunction = function(num1, num2) {
    if (num2 === 0) {
        return 'ERROR - DIVIDE BY 0';
    }
    return num1/num2;
}

//define function that performs operation on two numbers
const operate = function(operator, num1, num2) {
    if (operator == '+') {
        return addFunction(num1, num2);
    }
    if (operator == '-') {
        return subtractFunction(num1, num2);
    }
    if (operator == '*') {
        return multiplyFunction(num1, num2);
    }
    if (operator == '/') {
        return divideFunction(num1, num2);
    }
}

let firstNumber = null;
let secondNumber = null;
let operator = null;


/*UPDATE DISPLAY*/

//obtain references to the button and display elements
const buttons = document.querySelectorAll('.button'); //references every div with "button" class
const display = document.querySelector('.display-entry'); //references display <p> element with "display-entry" class

//apply a function to each of the calculators' buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {

    });
});