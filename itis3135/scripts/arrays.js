let persons = [];
let salaries = [];

// Function to add a person and salary to the arrays.
function addSalary() {
    const employeeSelect = document.getElementById("employeeSelect");
    const salaryInput = document.getElementById("salaryInput");

    // Get the selected employee and entered salary.
    const selectedEmployee = employeeSelect.value;
    const enteredSalary = salaryInput.value;

    // Validate the inputs.
    if (selectedEmployee.trim() === "" || isNaN(enteredSalary)) {
        alert("Please enter a valid name and numeric salary.");
        return;
    }

    // Add the person and salary to the arrays.
    persons.push(selectedEmployee);
    salaries.push(parseFloat(enteredSalary));

    // Clear the input fields.
    employeeSelect.value = "";
    salaryInput.value = "";

    // Move the cursor back to the name field.
    employeeSelect.focus();
}

// Function to display average and highest salary.
function displayResults() {
    const resultDiv = document.getElementById("results");
    
    // Calculate the average and highest salary.
    const averageSalary = calculateAverageSalary();
    const highestSalary = calculateHighestSalary();

    // Create and update the results in the div.
    resultDiv.innerHTML = `
        <h2>Results</h2>
        <p>Average Salary: $${averageSalary.toFixed(2)}</p>
        <p>Highest Salary: $${highestSalary.toFixed(2)}</p>
    `;
}

// Function to calculate average salary.
function calculateAverageSalary() {
    if (salaries.length === 0) {
        return 0;
    }
    const total = salaries.reduce((acc, salary) => acc + salary, 0);
    return total / salaries.length;
}

// Function to calculate highest salary.
function calculateHighestSalary() {
    if (salaries.length === 0) {
        return 0;
    }
    return Math.max(...salaries);
}

// Function to display names and salaries in the table.
function displaySalary() {
    const table = document.getElementById("results_table");

    // Clear the existing table rows.
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Salary</th>
        </tr>
    `;

    // Add rows for each person and their salary.
    for (let i = 0; i < persons.length; i++) {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = persons[i];
        cell2.innerHTML = `$${salaries[i].toFixed(2)}`;
    }
}

// Move the cursor to the name field when the page loads.
document.getElementById("employeeSelect").focus();