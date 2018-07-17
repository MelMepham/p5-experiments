
var rot = 60
var rote = 15
var rotp = 30
var s = 1

function setup() {
    createCanvas(600, 600);
}
function t() {
    triangle(-34.64, 20, 0, -40, 34.64, 20);
}//Central Triangle
function ta() {
    push();
    fill(95, 113, 255)
    translate (-34.64, -20)
    rotate (radians(60));
    t();
    pop();
}//Outer triangle
function tb() {
    fill(95, 188, 255);
    triangle (0, -40, 0, 0, 69.28, 0);
    fill(212, 227, 255);
    triangle (-69.28, 0, 0, -40, 0, 0);
}//Finishes Icosahedron
function tba() {
    fill(244, 122, 238);
    triangle (0, -40, 0, 0, 69.28, 0);
    fill(255, 217, 238);
    triangle (-69.28, 0, 0, -40, 0, 0);
}//Finishes Icosahedron
function central() {push();
    translate (0, -40)
    tb();
    pop();
    push();
    translate (34.64, 20);
    rotate(radians(120))
    tb();
    pop();
    push();
    translate (-34.64, 20);
    rotate(radians(240))
    tb();
    pop();

    push();
    ta();
    translate (69.28, 0);
    ta();
    translate (-34.64, 60);
    ta();
    pop();

    ellipse (0, 0, 10, 10)
    pop();
}
function centrala() {push();
    translate (0, -40)
    tba();
    pop();
    push();
    translate (34.64, 20);
    rotate(radians(120))
    tba();
    pop();
    push();
    translate (-34.64, 20);
    rotate(radians(240))
    tba();
    pop();

    push();
    ta();
    translate (69.28, 0);
    ta();
    translate (-34.64, 60);
    ta();
    pop();

    ellipse (0, 0, 10, 10)
    pop();
}
function tc() {
    blendMode(BLEND);
    fill(95, 113, 255, 200);
    rotate(radians(frameCount/-3));
    triangle(-65, -110, 0, -80, 65, -110);
    rotate(radians(60));
}// dark purple triangles
function tca() {
    fill(255, (sin(frameCount/120)+1)*128, 180);
    rotate(radians(frameCount/3));
    triangle(-65, -110, 0, -80, 65, -110);
    rotate(radians(60));
}
function td() {
    blendMode(BLEND);
    fill(255, ((sin(frameCount/120)+1)*128), 180);
    rotate(radians(frameCount/-3));
    triangle(-65, -110, 0, -150 +(sin(frameCount/240)*200), 65, -110);
    rotate(radians(60));
}//blue triangles
function e() {
    fill((sin(frameCount/120)+1)*128, 116, 203, 200);
    rotate(radians(30));
    ellipse (0, -150, 10, 10);
    ellipse (-40, -150, 5, 5);
    ellipse (-20, -150, 5, 5);
    ellipse (40, -150, 5, 5);
    ellipse (20, -150, 5, 5);
             }//dots
function ee() {
    push();    
    strokeWeight(2);
    scale(((sin(frameCount/60)+1)*40)+5);
    stroke(95, 113, 255);
    ellipse(0, -165, 40, 40);
    ellipse(0, -165, 30, 30);
    fill(95, 113, 255);
    ellipse(0, -165, 19, 19);
    pop();
}//Three
function pizza() {  push();
    fill(255, 235, (sin(frameCount/120)+1)*128);
    triangle (-20, -250, 0, -185, 20, -250);
    strokeWeight(10);
    stroke(255, 208, 191);
    line(-15, -250, 15, -250);
    noStroke();
    fill(255, 94, 139);
    ellipse(-10, -238, 7, 7);
    ellipse(7, -225, 7, 7);
    ellipse(2, -213, 7, 7);
    pop();}//Pizza
function pb() {
    push();
    stroke(255, 242, 235);
    strokeWeight(2);
    fill(255, 116, 203);
    triangle (-35.24, -270, 0, 0, 35.24, -270);
    rotate (radians(15));
    fill(255, 186, 235);
    triangle (-35.24, -270, 0, 0, 35.24, -270);
    pop();
}
function draw(){
    background(255, 242, 235);
    noStroke()
    fill(255, 116, 203);
    
    //pizza background
    push();
    translate (300, 300);
    scale(((sin(frameCount/60)+1)*10)+5); //+1 is so sin doesn't go into negatives (it was going from -1 - 1 now its going from 0 - 2), 10 is the overall scale and 5 is smallest it can be.
    rotate(radians(frameCount/2));
    while (rotp < 360) {
    push();
    rotate(radians(rotp));
    pb();
    rotp = (rotp + 30)
    pop();
    }
    if (rotp >= 360){
    rotp = 0;
    }
    pop();
    
    //three
    push();
    translate (300, 300);
    while (rote < 360) {
    push();
    rotate(radians(rote));
    ee();
    rote = (rote + 15)
    pop();
    }
    if (rote >= 360){
    rote = 0;
    }
    pop();
    
    push();
    translate(300, 300);
    scale(((sin(frameCount/60)+.5)*10)+5);
    fill(255, 255, 203, (sin(frameCount/120)+1)*50);
    ellipse (0, 0, 340, 340);
    ellipse (0, 0, 160, 160);
    pop();
    
    //dots
    push()
    translate (300, 300);
    rotate(radians(frameCount/-3));
    scale((sin(frameCount/120)*1)+1);
    while (rot < 360) {
    push();
    rotate(radians(rot));
    e();
    rot = (rot + 60)
    pop();
    }
    if (rot >= 360){
    rot = 0;
    }
    pop()
    
    //blue triangles
    push()
    translate (300, 300);
    scale((sin(frameCount/120)*1)+1);
    while (rot < 360) {
    push();
    rotate(radians(rot));
    td();
    rot = (rot + 60)
    pop();
    }
    if (rot >= 360){
    rot = 0;
    }
    pop()
    
    // dark purple triangles
    push()
    translate (300, 300);
    scale((sin(frameCount/60)*1)+1);
    while (rot < 360) {
    push();
    rotate(radians(rot));
    tc();
    rot = (rot + 60)
    pop();
    }
    if (rot >= 360){
    rot = 0;
    }
    pop()
    
    push();
    translate(300, 300);
    rotate(radians(frameCount/6));
    scale(((sin(frameCount/120)+.5)*10)+5);
    central()
    while (rot < 360) {
    push();
    translate(300, 300);
    rotate(radians(rot));
    tca();
    rot = (rot + 60)
    pop();
    }
    if (rot >= 360){
    rot = 0;
    }
    pop();

    //pizza
    push();
    translate (300, 300);
    rotate(radians(frameCount/3));
    while (rote < 360) {
    push();
    rotate(radians(rote));
    pizza();
    rote = (rote + 15)
    pop();
    }
    if (rote >= 360){
    rote = 0;
    }
    pop();
     //blue triangles
    push()
    translate (300, 300);
    scale((sin(frameCount/120)*1)+1);
    while (rot < 360) {
    push();
    rotate(radians(rot));
    td();
    rot = (rot + 60)
    pop();
    }
    if (rot >= 360){
    rot = 0;
    }
    pop()
    
    // Central image
    push();
    translate(300, 300);
    rotate(radians(frameCount/6));
    centrala()
    while (rot < 360) {
    push();
    translate(300, 300);
    rotate(radians(rot));
    tca();
    rot = (rot + 60)
    pop();
    }
    if (rot >= 360){
    rot = 0;
    }
    pop();

    
}
