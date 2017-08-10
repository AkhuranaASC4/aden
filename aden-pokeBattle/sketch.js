let rect1 = 100
let button;
let newButton;



function setup()  {
    createCanvas(windowWidth,windowHeight);
    background('white')
fill('blue')
rect(0, 0,windowWidth, rect1)  
fill('red')
rect(0,100,200, rect1 + 900)
fill('blue')
rect(200, 650,windowWidth, windowHeight)
   
button = createButton('Fight');
button.position(20,400);
button.mousePressed(click);

newButton = createButton('Attack');
newButton.position(80, 400);
newButton.mousePressed(secondClick);

}

function secondClick(){
  $("Attack").click(SecondClick())
     $(body).append("<h1> Your Opponent has been attacked </h1>");
 
 };


function click(){
    fill('black')
    rect(400,400,200,100)
     fill('yellow')
    rect(800,400,200,100)  
}

