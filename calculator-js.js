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
let currentInput = '';
let operator = null;
let runningTotal = null;

const updateDisplay = function(button) {
    const buttonValue = button.textContent;
    
    //if the input is a number, add it to an ongoing string
    if (!isNaN(buttonValue)) {
        currentInput += buttonValue;
        display.textContent = currentInput;
    
    /*if the input is an operator, update the running total, the operator, and reset the input:
        if we've only typed in one number thus far, this number is the new running total, and we
        set the operator

        if our operator is set, we already have a number typed, so we update the running total to be
        the operation between this newly inputted number and the previous running total
    */
    } else if (['+', '-', '*', '/'].includes(buttonValue)) {
        if (currentInput) {
            if (runningTotal === null) {
                runningTotal = parseFloat(currentInput);
            } else if (operator) {
                runningTotal = operate(operator, runningTotal, parseFloat(currentInput));
            }
        }
        
        operator = buttonValue;
        currentInput = '';
        display.textContent = runningTotal;
            
    /*If the input is the = sign:
        This means we have a runningTotal value, an operator set, and a non-blank currentInput value,
        since the currentInput value is equivalent to the last ongoing number String before the =
        operator was pressed
    */   
    } else if (buttonValue === '=') {
        if (runningTotal && operator !== null & currentInput !== '') {
            runningTotal = operate(operator, runningTotal, parseFloat(currentInput));
            display.textContent = runningTotal;
            currentInput = '';
            operator = null;
        }

    //to clear, reset all variables and the display
    } else if (buttonValue === 'C') {
        currentInput = '';
        operator = null;
        runningTotal = null;
        display.textContent = '';
    }
};

//apply an event listener to each of the calculators' buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => updateDisplay(button));
});

