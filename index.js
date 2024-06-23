//Mandatory Tasks:
// Create four functions named add, subtract, multiply, and divide that perform addition, subtraction, multiplication, and division, respectively. Each function should take two parameters and return the result of the corresponding arithmetic operation.
// Instructions:
// Addition Function:
// Create a function named add.
// The function should take two parameters.
// It should return the sum of the two parameters.
// Example: add(5, 10) should return 15.

function add(value1, value2) {
  return value1 + value2;
}
// console.log(add(5, 10));

// Subtraction Function:
// Create a function named subtract.
// The function should take two parameters.
// It should return the difference between the first and second parameter.
// Example: subtract(10, 4) should return 6.
function subtract(value1, value2) {
  return value1 - value2;
}
// console.log(subtract(10, 4));

// Multiplication Function:
// Create a function named multiply.
// The function should take two parameters.
// It should return the product of the two parameters.
// Example: multiply(3, 7) should return 21.
function multiply(value1, value2) {
  return value1 * value2;
}
// console.log(multiply(3, 7));

// Division Function:
// Create a function named divide.
// The function should take two parameters.
// It should return the result of dividing the first parameter by the second parameter.
// Example: divide(20, 5) should return 4.

function divide(value1, value2) {
  return value1 / value2;
}
// console.log(divide(20, 5));

/*
Optional Tasks:


Task 1: Loops
Objective: Learn how to use different types of loops in JavaScript.
For Loop:
Create a function named printNumbers.
Use a for loop to print numbers from 1 to 10.
Example:
printNumbers(); // 1 2 3 4 5 6 7 8 9 10
*/
function printNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
// printNumbers();

/*
While Loop:
Create a function named printEvenNumbers.
Use a while loop to print even numbers from 2 to 20.
Example:
printEvenNumbers(); // 2 4 6 8 10 12 14 16 18 20
*/

function printEvenNumbers() {
  let i = 1;
  while (i <= 20) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
}
// printEvenNumbers();

/*
Do-While Loop:
Create a function named printOddNumbers.
Use a do-while loop to print odd numbers from 1 to 19.
Example:
printOddNumbers(); // 1 3 5 7 9 11 13 15 17 19

 */
function printOddNumbers() {
  let i = 1;
  do {
    if (i % 2 === 1) {
      console.log(i);
    }
    i++;
  } while (i < 20);
}
// printOddNumbers();

/*
Task 2: Switch Statements
Objective: Learn how to use switch statements for conditional logic.
Day of the Week:
Create a function named getDayName.
Use a switch statement to return the name of the day based on a given number (1 for Sunday, 2 for Monday, etc.).
Example
console.log(getDayName(3)); // Tuesday
console.log(getDayName(7)); // Saturday
console.log(getDayName(0)); // Invalid day number

 */
function getDayName(dayCount) {
  switch (dayCount) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day number";
  }
}

// console.log(getDayName(1));
// console.log(getDayName(2));
// console.log(getDayName(3));
// console.log(getDayName(4));
// console.log(getDayName(5));
// console.log(getDayName(6));
// console.log(getDayName(7));

// console.log(getDayName(0));
// console.log(getDayName(10));

/* 
Task 3: Variable and Function Scope
Objective: Learn about the scope of variables and functions in JavaScript.
Function Scope:
Create a function named testFunctionScope.
Declare a variable called insideFunction inside the function and try to access it outside the function. Observe what happens.
*/
function testFunctionScope() {
  var insideFunction = "test";
}
// console.log(insideFunction);
/*
Block Scope with let and const:
Create a function named testBlockScope.
Declare a variable using let or const inside a block (e.g., if statement or loop) and try to access it outside the block. Observe what happens.
*/

function testBlockScope() {
  if (true) {
    let test = "test";
  }
  console.log(test);
}

// testBlockScope();

/*
Task 4: Immediately Invoked Function Expressions (IIFE)
Objective: Learn about IIFE and its uses.
Basic IIFE:
Create an IIFE that logs a message to the console.
Example:
// This is an IIFE
 */
(function () {
  console.log("This is an IIFE");
})();

/*
IIFE with Parameters:
Create an IIFE that takes two parameters and logs their sum to the console.
Example:
// 15
*/

(function (number1, number2) {
  console.log(number1 + number2);
})(10, 5);

/*
IIFE to Avoid Polluting Global Scope:
Create a function inside an IIFE to demonstrate that variables inside the IIFE do not pollute the global scope.
*/

(function () {
  let variable = "Local in IIFE";
  function test() {
    console.log("inside from iife");
  }
})();
