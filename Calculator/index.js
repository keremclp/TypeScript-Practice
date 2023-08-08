"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    // void means, this function is notreturn anything
    var firstStr = (0, readline_sync_1.question)("Enter first number:\n");
    var operator = (0, readline_sync_1.question)("Enter operator:\n");
    var secondStr = (0, readline_sync_1.question)("Enter second number:\n");
    // const firstNum = isNumber(firstStr);
    // console.log(firstNum)  for check the system work fine or not 
    // const op = isOperator(operator);
    // console.log(op)
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) {
        console.log("is valid.");
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log("Result: ".concat(result));
    }
    else {
        console.log("\nInvalid input\n");
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
        default:
            return 0;
    }
}
function isOperator(operator) {
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str); // convert string to number, 33 or NaN
    var isNum = !isNaN(maybeNum); // if it is number returns false 
    // isNan is a function that returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
    return isNum;
}
main();
