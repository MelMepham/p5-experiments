function setup() {
    createCanvas (400, 400);
}

function draw() {
    background (153, 51, 255);
    fill(66, 134, 244)
    ellipse(200, 200, 114.8, 114.8);
    noStroke();
    push()
    translate (200 , 200);
    rotate(mouseX);
    fill(244, 242, 88);
    triangle(-50, 29.2, 0, -57.4, 50, 29.2);
    pop();
    push()
    translate (200 , 200);
    rotate(mouseY);
    fill(244, 242, 88);
    triangle(-50, 29.2, 0, -57.4, 50, 29.2);
    pop();
  
}