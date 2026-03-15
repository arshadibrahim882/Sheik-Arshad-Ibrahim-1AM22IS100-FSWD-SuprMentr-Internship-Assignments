function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b !== 0 ? a / b : "Cannot divide by zero!"; }

console.log("Addition:", add(15, 5));
console.log("Subtraction:", subtract(15, 5));
console.log("Multiplication:", multiply(15, 5));
console.log("Division:", divide(15, 5));