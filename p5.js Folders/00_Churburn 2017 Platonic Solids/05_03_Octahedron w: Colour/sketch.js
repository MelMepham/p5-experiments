function setup()
{
createCanvas(600, 600);

}

function draw()
{
translate(300, 300);
noStroke();
fill(95, 113, 255);
triangle(-34.64, 20, 0, -40, 34.64, 20);

push();
fill(95, 1, 255);

triangle(34.64, -20, 0, 40, -34.64, -20);

pop();
}
