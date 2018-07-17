
  setup = () => {
    createCanvas(1600, 200);
  }
  var x , y

  function rotation(degrees) {
    rotate(radians(degrees))
    x = 800;
    y = 100;
  }

draw = () => {
    background(0, 255, 255);
    noStroke();

    fill(255, 0, 255);
    translate(x, 100);
    if (x > 850) {
      x = 800
    }
    x = x + frameCount/2
    console.log(x)
      triangle(0, -50, 50, 0, 0, 50)

    // push()
    // fill(255, 0, 255);
    // translate((x - frameCount/2), 100);
    //   triangle(0, 50, -50, 0, 0, -50)
    // pop()

    // push()
    // fill(255, 255, 255);
    // translate(800, 100);
    // rotation(frameCount/2);
    //   rect(-50, -50, 100, 100);
    // pop()
}
