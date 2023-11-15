function setup() {
    createCanvas (500,500);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
        ellipse(mouseX, mouseY, 10, 10);
    }
    
}