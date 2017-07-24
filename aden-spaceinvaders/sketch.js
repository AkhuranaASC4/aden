var s = 50;
var x = 550;
var y = 750;
bulletx = 550;
bullety = 750
var cls= 12;
var s2 = 150;
var notfired = true;


function setup() {
  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  if (keyIsDown(LEFT_ARROW)&& x>0)
    x-=10;

  if (keyIsDown(RIGHT_ARROW)&& x<1170)
    x+=10;

  clear();
  background('black')

ellipse(bulletx,bullety,10,10)

if(notfired == false){
    bullety-=10;
}

if(bullety < 0){
    bullety = 750
}

for (i =1; i <= cls; i++){
    rect (i*100, s, s, s)
}

for (i =1; i <= cls; i++){
    rect (i*100, s2, s, s)
}

  fill(255, 0, 0);
 rect(x,y,200,20)

}

function keyPressed(){
   if (keyCode == 32){
    //    bullety -=10
    notfired = false;
    
   }
}
   
  
 





// fill(255,0,0);
//     rect(alienx, alieny, 100, 100);
//     //alien automatic movement from side to side, if reaches border, goes oopposite way
//     alienx += xIncrement;
//     if (((alienx+100) >= width) || ((alienx)<=0)){
//         xIncrement = xIncrement*(-1)
//     }

