var rot = 60
var rota = 120


function setup(){
createCanvas (600, 600);
}
function fol(){
    noFill();
    strokeWeight(3)
    stroke (98, 193, 134);
    ellipse (0, -40, 80, 80)
}
function tri() {
    noStroke();
    fill(134, 220, 163);
    triangle(-20, 0, 20, 0, 0, 80)
    fill(168, 245, 197);
    triangle(-20, 0, 20, 0, 0, 50)
    fill(254, 245, 117);
    triangle(-20, 0, 20, 0, 0, 40)
    fill(148, 219, 111);
    triangle(-20, 0, 20, 0, 0, 30)
    fill(27, 175, 142);
    triangle(-10, 0, 10, 0, 0, 30)
}
function flo(){

    fill(255, 229, 104);
    ellipse(0, -100, 10, 10);
    fill(255, 181, 111);
    ellipse(20, -98, 7, 7);
    ellipse(-20, -98, 7, 7);
    triangle(22, -101, 30, -90, 18, -95);
    triangle(-22, -101, -30, -90, -18, -95);


}
function hexa() {
    beginShape();
    vertex(-103.92, -60);
    vertex(0, -120);
    vertex(103.92, -60);
    vertex(103.92, 60);
    vertex(0, 120);
    vertex(-103.92, 60);
    endShape(CLOSE);
    }
function tria() {
    fill(80, 185, 113);
    triangle(103.92, -60, 160, 0, 103.92, 60);
    fill(255, 121, 42);
    ellipse(115, 30, 7, 7);
    ellipse(115, -30, 7, 7);
    fill(255, 153, 102);
    triangle (115, 20, 130, 0, 115, -20);
    fill(255, 193, 134);
    beginShape();
    vertex(125, 25);
    vertex(150, 0);
    vertex(125, -25);
    vertex(140, 0);
    endShape(CLOSE);
}
function ss(){
    fill(21, 119, 100);
    triangle (160, 0, 179.5, 50.5, 179.5, -50.5);
    fill(146, 176, 192);
    beginShape()
    vertex(-80, 140); //a
    vertex(-46, 180); //b
    vertex(46, 180); //c
    vertex(80, 140); //d
    vertex(0, 0+(sin(frameCount/240)*300)); //e
    endShape(CLOSE)
    fill(181, 206, 224);
    triangle(-46, 180, -20, 180, 0, 0);
    triangle(46, 180, 20, 180, 0, 0);
}
function squ (){
    fill(50, 79, 140);
    beginShape();
    vertex(0, 200);
    vertex(20, 160);
    vertex(0, 140);
    vertex(-20, 160);
    endShape(CLOSE);
    fill(0, 0, 53);
    beginShape();
    vertex(0, 180);
    vertex(20, 160);
    vertex(0, 140);
    vertex(-20, 160);
    endShape(CLOSE);
    fill(((sin(frameCount/60)+.06)*128), 255, 171);
    beginShape();
    vertex(0, 175);
    vertex(15, 160);
    vertex(0, 145);
    vertex(-15, 160);
    endShape(CLOSE);

}
function smtri(){
  fill(48, 77, 142);
  triangle(179.5, 50.5, 179.5, -50.5, 210, 0);
  fill (180, 206, 225);
  triangle(179.5, 50.5, 210, 0, 270, 0);
  fill(57, 139, 209);
  triangle(179.5, -50.5, 210, 0, 270, 0);
  ellipse(270, 0, 20 , 20)

}
function smtria(){
  fill(0,255,169);
  triangle(-46, 180, 0, 270, 46, 180);
  fill(216, 235, 166);
  ellipse(0, 200, 20, 20)
  ellipse(0, 230, 10, 10)
}
function draw()
{
    translate(300, 300);
    background (243, 255, 225);
    noStroke();
    fill(((sin(frameCount/120)+1)*128), 235, 253)
    ellipse(0, 0, 550, 550)

    push();
    rotate(radians(frameCount/3));
    push();
    while (rot < 360) {
    push();
    rotate(radians(rot));
    ss();
    rot = (rot + 60)
    pop();
    }
    if (rot >= 360){
    rot = 0;
    }
    pop();
    pop();

    push();
    scale((sin(frameCount/120)*1)+.5)
    rotate(radians(frameCount/3))
    push();
    while (rot < 360) {
    push();
    rotate(radians(rot));
    smtria();
    rot = (rot + 60)
    pop();
    }
    if (rot >= 360){
    rot = 0;
    }
    pop();
    pop();

    push();
    rotate(radians(frameCount/-3))
    push();
    while (rot < 360) {
    push();
    rotate(radians(rot));
    smtri();
    rot = (rot + 60)
    pop();
    }
    if (rot >= 360){
    rot = 0;
    }
    pop();
    pop();

    push();
    rotate(radians(frameCount/-2))
    scale((sin(frameCount/120)*1)+.5)//+1 is so sin doesn't go into negatives (it was going from -1 - 1 now its going from 0 - 2), 10 is the overall scale and 5 is smallest it can be.
    push();
    while (rot < 360) {
    push();
    rotate(radians(rot));
    squ();
    rot = (rot + 60)
    pop();
    }
    if (rot >= 360){
    rot = 0;
    }
    pop();
    pop();

    push();
    scale((sin(frameCount/120)*1)+.5)
    fill(241, 247, 183, 200+((sin(frameCount/3)*3)+.5));
    hexa();
    pop();

    push();
    rotate(frameCount/30)
    fill(27, 136, 119)
    ellipse(0, 0, 170, 170)
    push();
    while (rot < 360) {
    push();
    rotate(radians(rot));
    fol();
    rot = (rot + 60)
    pop();
    }
    if (rot >= 360){
    rot = 0;
    }
    pop();//fol
    pop();

    push();
    strokeWeight(3)
    stroke (98, 193, 134);
    fill(217, 253, 233);
    ellipse(0, 0, 80, 80);
    pop();

    push();
    rotate(frameCount/-60);
    scale((sin(frameCount/120)*1)+.5)
    push();
    while (rota < 360) {
    push();
    rotate(radians(rota));
    tri();
    rota = (rota + 120)
    pop();
    }
    if (rota >= 360){
    rota = 0;
    }
    pop();
    pop(); //triangles (tri)

    push();
    scale((sin(frameCount/90)*3)+.5);
    rotate(frameCount/60);
    push();
    while (rot < 360) {
    push();
    rotate(radians(rot));
    tria();
    rot = (rot + 60)
    pop();
    }
    if (rot >= 360){
    rot = 0;
    }
    pop();
    pop(); //triangles (tria)

    push();
    scale((sin(frameCount/90)*3)+.5)
    push();
    while (rot < 360) {
    push();
    rotate(radians(rot));
    flo();
    rot = (rot + 60)
    pop();
    }
    if (rot >= 360){
    rot = 0;
    }
    pop();
    pop(); //triangles (tri)

    scale(1.5);
    rotate(frameCount/120);
    noStroke();
    fill(255, ((sin(frameCount/60)+1)*128), 40);
    triangle(-34.64, 20, 0, -40, 0, 0);
    fill(255, ((sin(frameCount/90)+1)*128), 102);
    triangle(0, 0, 0, -40, 34.64, 20);
    fill(255, ((sin(frameCount/120)+1)*128), 250);
    triangle(-34.64, 20, 0, 0, 34.64, 20);//tetrahedron


}
