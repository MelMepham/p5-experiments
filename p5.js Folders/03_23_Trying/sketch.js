function setup() {
    createCanvas (800, 400);
    var interx = 4
    var interxa = 3
    
    var Xoffset = 150
    var xorig = 150

    var Yoffset = 186.6
    
    var tri1 = 50
    var tri2 = 136.6
    var tri3 = 100
    var tri4 = 50
    var tri5 = 150
    var tri6 = 136.6
    
    var tri1a = 125
    var tri2a = 25
    var tri3a = 175
    var tri4a = 111.6
    var tri5a = 225
    var tri6a = 25
}
    
    function draw() {

    noStroke();
    fill (170, 45 ,65);
while (interx > 0) {
    triangle (tri1, tri2, tri3, tri4, tri5, tri6);
    triangle (tri1 + Xoffset, tri2, tri3 + Xoffset, tri4 , tri5 + Xoffset, tri6);
    Xoffset = (Xoffset + 150);
    interx = (interx - 1);
    }
    Xoffset = xorig
while (interxa > 0) {
    triangle (tri1a, tri2a, tri3a, tri4a, tri5a, tri6a);
    triangle (tri1a + Xoffset, tri2a, tri3a + Xoffset, tri4a, tri5a + Xoffset, tri6a);
    Xoffset = (Xoffset + 150);
        
    interxa = (interxa - 1);
}
}

    
 