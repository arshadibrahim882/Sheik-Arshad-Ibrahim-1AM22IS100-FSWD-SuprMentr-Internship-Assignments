function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b !== 0 ? a / b : "Cannot divide by zero!";
        default:
            return "Invalid operator!";
    }
}

//Example usage.
let result = calculator(10, 5, "*");
console.log("Result:", result);