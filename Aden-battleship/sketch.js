
var loop
var cls= 4
var s= 100
var s2= 200

function setup(){
    createCanvas(800,500)

//  rect(100, 20, 50, 50)    
//    rect(50, 20, 50, 50)    


//      rect(100, 70, 50, 50)    
//    rect(50, 70,50, 50)




for (i =1; i <= cls; i++){
    rect(i*s, s, s, s)
    // rect (100, 50*i, 50, 50 )
}



for (i =1; i <= cls; i++){
    rect(i*s, s2, s, s)
}

}

var value = 0;
function draw() {
  fill(value);
  rect(s, s, s, s);
}

function mouseClicked() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}

function mousePressed() {
  rect(mouseX, mouseY,);
}