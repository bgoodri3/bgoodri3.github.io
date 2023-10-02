function getCurrentDateTime(){
    const now = new Date();
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
    const formattedDate = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const formattedTime = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });

    return `Today is ${formattedTime} on ${dayOfWeek}, ${formattedDate}`;
}

function greetUser() {
    const name = document.getElementById("nameInput").value;
    const mood = document.getElementById("moodInput").value;
    const greeting = `The Your Animal Brand Company welcomes you, ${name}! We're glad you are doing ${mood}!`;

    document.getElementById("greeting").textContent = greeting;
}

function findPolygonName() {
    const number = Math.abs(Math.round(parseFloat(document.getElementById("numberInput").value)));
    const polygonNames = ['monogon', 'digon', 'triangle', 'quadrilateral', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'nonagon', 'decagon'];

    if (number >= 0 && number <= 10) {
        const polygonName = polygonNames[number];
        document.getElementById("polygonName").textContent = `The polygon with ${number} sides is called a ${polygonName}.`;
    } else {
        document.getElementById("polygonName").textContent = "Please enter a number between 0 and 10.";
    }
}

// Define your other functions (function1, function2, function3, function4, function5) here

// Set up an interval to update the date and time display every second
setInterval(() => {
    document.getElementById("dateTimeDisplay").textContent = getCurrentDateTime();
}, 1000);
