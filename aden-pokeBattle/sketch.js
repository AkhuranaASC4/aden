var rect1 = 100


function setup()  {
    createCanvas(windowWidth,windowHeight);
    background('white')
fill('blue')
rect(0, 0,windowWidth, rect1)  
fill('red')
rect(0,100,200, rect1 + 900)
fill('blue')
rect(200, 650,windowWidth, windowHeight)

var button;

   
button = createButton('Start');
button.position(20,400);
button.mousePressed(change);
button.mousePressed(click);

 var newButton;
    newButton = createButton2('Attack')
    newButton.position(20,500);
    newButton.mousePressed(fight);


}

function change(){
}

function click(){
    fill('black')
    rect(400,400,200,100)
    fill('yellow')
    rect(800,400,200,100)
}

function fight(){
}