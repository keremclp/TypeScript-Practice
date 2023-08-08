import { question } from "readline-sync";

type Operator = '+' | '-' | '*' | '/';
 
function main(): void
{
    // void means, this function is notreturn anything
    const firstStr : string = question("Enter first number:\n");   
    const operator : string = question("Enter operator:\n")
    const secondStr: string = question("Enter second number:\n");

    // const firstNum = isNumber(firstStr);
    // console.log(firstNum)  for check the system work fine or not 
    // const op = isOperator(operator);
    // console.log(op)

    const validInput : boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr)

    
    if(validInput)
    {
        console.log("is valid.");
        const firstNum : number = parseInt(firstStr);
        const secondNum : number = parseInt(secondStr);
        const result : number = calculate(firstNum, operator as Operator, secondNum);
        console.log(`Result: ${result}`);
    }
    else
    {
        console.log("\nInvalid input\n");
        main();
    }
}

function calculate(firstNum: number, operator: Operator, secondNum: number): number
{
    switch(operator)
    {
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

function isOperator(operator: string): boolean
{
    switch(operator)
    {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}

function isNumber(str: string): boolean
{
    const maybeNum = parseInt(str); // convert string to number, 33 or NaN
    const isNum : boolean = !isNaN(maybeNum) // if it is number returns false 
    // isNan is a function that returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
    return isNum;
}

main();