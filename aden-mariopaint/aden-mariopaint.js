/*   var value = 0;
function draw() {
  for (var i = 0; i < 100; i++) {
  var r = random(-50, 50);
  line(50,i,50+r,i);
}
  fill(value);
  rect(25, 25, 50, 50);
}
function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
for (var i = 0; i < 100; i++) {
  var r = random(-50, 50);
  line(50,i,50+r,i);
} */


function draw() {
    resizeCanvas(1000,1000)
    console.log(mouseX)
}


 function mouseDragged() {
   fill(255,0,0)
    rect(mouseX,mouseY,100,100)
 }
 
var shapes = [ "circle", "rectangle", "triangle"];
var shapes = random(shapes);  // select random word
text(shapes,10,50);  // draw the word









