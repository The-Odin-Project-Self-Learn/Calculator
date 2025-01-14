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

