     var rot = 22.5 
     var rota = 45
     var rotat = 10
     var rotd = 1
     var s =.1
     var sc = 100
    
function setup() {
    createCanvas (400, 400);

}

function tria() {
    rotate(radians(22.5))
    fill(64, 0, 113)
    triangle(0, 0, 0, 99, 40.99, 99);
}

function trib() {
    fill(154, 202, 254)
    triangle(0, 0, 0, 99, -40.99, 99);
}

function tric() {
    fill((sin(frameCount/200)+1)*128, 97, 254);
    rotate(radians(22.5 + 1));
    scale(s+(sin(frameCount/200)*.5));
    triangle(-60.84, 159, 100+(sin(frameCount/200)*200), 99, 60.84, 159);    
}

function trid() {
    fill((sin(frameCount/500)+1)*128, 97, 254);
    rotate(radians(rotd));
    rotd = rotd + .1;
    rotate(radians(22.5));
    triangle(-60.84, 159, 0, 110, 60.84, 159);    
}
function circ(){
    noFill();
    stroke(255, 108, 145);
    strokeWeight(10);
    ellipse(200, 200, 10, 10);
}

function draw() {
    noStroke();
    background ((sin(frameCount/200)+1)*128, 97, 254);
    
    // centre triangles
while (rot < 360) {
    push();
    translate(200, 200);
    
    rotate(radians(rotat));
    rotat = rotat + 1/7;
    rotate(radians(rot));
    tria();
    trib();
    rot = (rot + 45);
   
    pop();  
 }
	if (rot >= 360){
	rot = 0;
	}
    
    // outer triangles
while (rota < 360) {
    push();
    translate (200, 200);
    rotate(radians(rota));
    tric();
    rota = (rota + 45)
    pop();
}
    if (rota >= 360){
        rota = 0;
    }
    
    while (rota < 360) {
    push();
    translate (200, 200);
    rotate(radians(rota));
    trid();
    rota = (rota + 45)
    pop();
}
    if (rota >= 360){
        rota = 0;
    }
    
    push()
    noFill();
    stroke(255, 108, 145);
    strokeWeight(10);
    ellipse(200, 200, 10, 10);
    scale(sc);
    sc = (sc + 2);
    pop()
}

