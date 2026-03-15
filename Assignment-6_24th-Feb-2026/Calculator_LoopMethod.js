while (true) {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let operator = prompt("Enter operator (+, -, *, /) or type 'exit' to quit:");

    if (operator === "exit") {
        console.log("Calculator exited.");
        break;
    }

    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
            break;
        default:
            result = "Invalid operator!";
    }

    console.log("Result:", result);
}