/*SET UP HELPER FUNCTIONS + GLOBAL VARIABLES*/

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





/*PERFORM CALCULATIONS AND UPDATE DISPLAY*/

//obtain references to the button and display elements
const buttons = document.querySelectorAll('.button'); //references every element with "button" class
const display = document.querySelector('.display-entry'); //references element with "display-entry" class

//define the logic to update the display when any calculator button is pressed
let operator = null;
let currentInput = '';
let runningTotal = '';

const updateDisplay = function(button) {
    const buttonValue = button.textContent;
    
    //if the input is a number, add it to an ongoing string
    if (!isNaN(buttonValue)) {
        currentInput += buttonValue;
        display.textContent = currentInput;
    
    /*if the input is an operator:
        
    */
    } else if (['+', '-', '*', '/'].includes(buttonValue)) {
        if (currentInput) {
            if (runningTotal === null) {
                runningTotal = parseFloat(currentInput);
            } else if (operator) {
                runningTotal = operate(operator, runningTotal, currentInput);
            }

            currentInput = '';
            operator = buttonValue;
        }
            
    /*If the input is the = sign:
        This means we have a runningTotal value, an operator set, and a non-blank currentInput value
    */   
    } else if (buttonValue === '=') {
        if (runningTotal && operator && currentInput !== null) {
            runningTotal = operate(operator, runningTotal, parseFloat(currentInput));
            display.textContent = runningTotal;
            currentInput = '';
            operator = null;
        }
    }
};

//apply an event listener to each of the calculators' buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => updateDisplay(button));
});

