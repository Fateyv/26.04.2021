const operator = prompt('Enter the operation you want to do (+ - / *)');
const firstNumber = +prompt('Enter the first number');
const secondNumber = +prompt('Enter the second number');
let result;
if (operator === '+') {
    result = firstNumber + secondNumber;
} else if (operator === '-') {
    result = firstNumber - secondNumber;
} else if (operator === '*') {
    result = firstNumber * secondNumber;
} else if (operator === '/') {
    result = firstNumber / secondNumber;
}
alert(`Your Answer: ${firstNumber}${operator}${secondNumber}=${result}`);