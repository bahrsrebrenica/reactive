function setup() {
  createCanvas(1000, 1000);
  background (150);
}

function draw() {
  circle(50,50, 90,90);

}
function mousePressed(){
  circle(mouseX, mouseY, 90,90);
}
function mouseClicked(){
  circle(mouseX, mouseY, 90,90);
  fill(color)('hsl(160, 100%, 50%)');
}


