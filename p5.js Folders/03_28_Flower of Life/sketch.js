var interx = 8
var circ = 11
var rot = 20

function setup() {
    createCanvas(600, 600);
    background (255, 240, 129)
}

function e() {
    translate(0,0);
    stroke(128, 70, 217);
    strokeWeight (3);
    noFill ();
    ellipse (0, 0, 100, 100); // Center Circle;
    ellipse (43.3, -25, 100, 100);
    ellipse (43.3, 25, 100, 100);
    ellipse (0, 50, 100, 100);
    ellipse (-43.3, 25, 100, 100);
    ellipse (-43.3, -25, 100, 100);
    ellipse (0, -50, 100, 100);
}
function circa() {
    push();
    translate (0, -500);
    e();
while (interx > 0) {
    translate(86.6, 50);
    e();
    interx =(interx - 1);
    }
    pop();
    interx = 8}
function draw(){

    // push();
    // translate (300, 300)
    // stroke((sin(frameCount/200)+1)*128, 70, 217)
    // strokeWeight(200);
    // noFill();
    // ellipse (0, 0, 800, 800);
    // pop();

    push();
    circa();
    while (circ > 0) {
    translate(0, 100);
    circa();
    circ =(circ - 1);
    }
    pop();

    translate(0,25);
    push();
    strokeWeight(20);
    stroke(255,240,(sin(frameCount/200)+1)*128);
    noFill();
    beginShape();
    vertex(300, 250);
    vertex(343.2, 275);
    vertex(343.3, 325);
    vertex(300, 350);
    vertex(256.7, 325);
    vertex(256.7, 275);
    endShape(CLOSE);
    pop();
}
