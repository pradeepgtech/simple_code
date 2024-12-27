function addNumbers(a, b) {
   return a + b;
}

function subtractNumbers(a, b) {
   return a - b;
}

function multiplyNumbers(a, b) {
   return a * b;
}

function divideNumbers(a, b) {
   return a / b;
}

let num1 = 20;
let num2 = 10;

let add = addNumbers(num1, num2);
let subtract = subtractNumbers(num1, num2);
let multiple = multiplyNumbers(num1, num2);
let divide = divideNumbers(num1, num2);

console.log("Add output is: " + add);
console.log("Subtract output is: " + subtract);
console.log("Multiple output is: " + multiple);
console.log("Divide output is: " + divide);

/*
Add output is: 30
Subtract output is: 10
Multiple output is: 200
Divide output is: 2
*/