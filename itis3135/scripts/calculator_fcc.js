document.addEventListener('DOMContentLoaded', function () {
    // Get the calculator display element
    const display = document.querySelector('.calculator_display');

    // Variables to store calculator data
    let firstOperand = '';
    let operator = '';
    let secondOperand = '';
    let result = '';

    // Function to update the display
    function updateDisplay() {
        display.textContent = result || secondOperand || firstOperand || '0';
    }

    // Event listener for button clicks
    document.querySelector('.calculator_keys').addEventListener('click', (e) => {
        const target = e.target;
        const action = target.getAttribute('data-action');
        const buttonValue = target.textContent;

        if (!action) {
            if (operator) {
                secondOperand += buttonValue;
            } else {
                firstOperand += buttonValue;
            }
        } else if (action === 'decimal') {
            if (operator) {
                secondOperand += '.';
            } else {
                firstOperand += '.';
            }
        } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            operator = action;
        } else if (action === 'calculate') {
            if (operator === 'add') {
                result = String(parseFloat(firstOperand) + parseFloat(secondOperand));
            } else if (operator === 'subtract') {
                result = String(parseFloat(firstOperand) - parseFloat(secondOperand));
            } else if (operator === 'multiply') {
                result = String(parseFloat(firstOperand) * parseFloat(secondOperand));
            } else if (operator === 'divide') {
                result = String(parseFloat(firstOperand) / parseFloat(secondOperand));
            }
        }

        updateDisplay();
    });
});