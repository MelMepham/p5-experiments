var circleX = 0;

function setup() {
    createCanvas(400, 400);
    background(66, 134, 244);
}

function draw() {
    noStroke();
    fill(244, 193, 65);
    ellipse(circleX, mouseY, 20, 20);
    
    circleX = circleX +1;    
}

function mousePressed() {
    background(66, 134, 244);
    
    circleX = 0; 

}