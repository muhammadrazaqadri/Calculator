// Get the input and buttons from the DOM
const input = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the value of the button
        const value = button.textContent;

        // Check if the button is a number, operator, or special button
        if (isNumber(value)) {
            appendNumber(value);
        } else if (isOperator(value)) {
            handleOperator(value);
        } else if (isEqualSign(value)) {
            calculateResult();
        } else if (isClear(value)) {
            clearAll();
        } else if (isDelete(value)) {
            deleteOne();
        } else if (isPercentage(value)) {
            percentage();
        }
    });
});

// Function to check if a value is a number
function isNumber(value) {
    return !isNaN(value);
}

// Function to check if a value is an operator
function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

// Function to check if a value is the equal sign
function isEqualSign(value) {
    return value === '=';
}

// Function to check if a value is the clear button
function isClear(value) {
    return value === 'AC';
}

// Function to check if a value is the delete button
function isDelete(value) {
    return value === 'DEL';
}

// Function to check if a value is the percentage button
function isPercentage(value) {
    return value === '%';
}

// Function to append a number to the input
function appendNumber(number) {
    input.value += number;
}

// Function to handle operators
function handleOperator(operator) {
    if (input.value === '') {
        return;
    }

    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        input.value += operator;
    }
}

// Function to calculate the result
function calculateResult() {
    try {
        const result = eval(input.value);
        input.value = result;
    } catch (error) {
        alert('Invalid expression');
    }
}

// Function to clear all the input
function clearAll() {
    input.value = '';
}

// Function to delete the last character in the input
function deleteOne() {
    input.value = input.value.slice(0, -1);
}

// Function to calculate percentage
function percentage() {
    const value = parseFloat(input.value);
    if (isNaN(value)) {
        return;
    }

    input.value = value / 100;
}

