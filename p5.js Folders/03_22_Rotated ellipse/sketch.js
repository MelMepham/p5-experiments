function setup() {
    createCanvas (600, 400);
}

function draw() {
   
    background(233, 47, 171);    
    noStroke();
    fill(238, 131, 209);
    ellipse(200, 25, 100, 20);
    ellipse(200, 298.2, 100, 20);
    
    push();
    translate(75,93.3)
    rotate(2.1);
    ellipse(0, 0, 100, 20);
    pop();
  
    push()
    fill(115, 47, 233);
    
    // Top Triangles
    triangle(50, 136.6, 100, 50, 150, 136.6);
    triangle(150, 25, 200, 111.6, 250, 25);
    triangle(250, 136.6, 300, 50, 350, 136.6); 
   
    // Bottom Triangles
    triangle(50, 186.6, 100, 273.2, 150, 186.6);
    triangle(150, 298.2, 200, 211.6, 250, 298.2);
    triangle(250, 186.6, 300, 273.2, 350, 186.6); 
    fill(238, 131, 209);
    
    if(mouseY > 50 ){
    ellipse(mouseX, 161.6, mouseY, 50)
    }
    else[
    ellipse(mouseX, 161.6, 50, 50)
    ]
    pop()
}