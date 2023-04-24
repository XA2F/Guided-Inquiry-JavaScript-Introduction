let x = 5;
let y = 15;

console.log(Math.abs(y - x));

let sum = y - x;
let words = "The difference between 15 and 5 is";

console.log(words + " " + sum);

let FirstName = "Leroy";
let LastName = "Kate";

let d = 5;
let e = 4;

console.log(d - e);
if (FirstName > LastName) {
  console.log(
    "The Name" +
      " " +
      FirstName +
      " " +
      "is longer than" +
      " " +
      LastName +
      " " +
      "by" +
      " " +
      (d - e) +
      " " +
      "Character"
  );
} else if (FirstName < LastName)
  console.log("This Output Was not part of the assignment");

let Input = prompt("Hey How you been?:");

if (Input === Input.toUpperCase()) {
  console.log("WHY YOU YELLING?");
} else if (Input === Input.toLowerCase()) {
  console.log("why you whispering?");
} else {
  console.log(
    "I don't know what you are talking about but you talking normally"
  );
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {}

let dum1 = prompt("Enter a Number");
let dum2 = prompt("Enter another number");

console.log();

const num1 = parseFloat(prompt("Enter the first number:"));
const operator = prompt("Enter an operator (+, -, *, /):");
const num2 = parseFloat(prompt("Enter the second number:"));

let result;

switch (operator) {
  case "+":
    result = add(num1, num2);
    break;
  case "-":
    result = subtract(num1, num2);
    break;
  case "*":
    result = multiply(num1, num2);
    break;
  case "/":
    result = divide(num1, num2);
    break;
}

console.log(`${num1} ${operator} ${num2} = ${result}`);
