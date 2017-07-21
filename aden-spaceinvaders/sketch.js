var s = 50;
var x = 550;
var y = 750;
var cls= 12;
var s2 = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  if (keyIsDown(LEFT_ARROW))
    x-=10;

  if (keyIsDown(RIGHT_ARROW))
    x+=10;

  clear();
  background('black')

for (i =1; i <= cls; i++){
    rect (i*100, s, s, s)
}

for (i =1; i <= cls; i++){
    rect (i*100, s2, s, s)
}

  fill(255, 0, 0);
 rect(x,y,200,20)




}


// fill(255,0,0);
//     rect(alienx, alieny, 100, 100);
//     //alien automatic movement from side to side, if reaches border, goes oopposite way
//     alienx += xIncrement;
//     if (((alienx+100) >= width) || ((alienx)<=0)){
//         xIncrement = xIncrement*(-1)
//     }

