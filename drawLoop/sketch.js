var x = 0;
var y = 10;
//Just called once and done
function setup()  {
createCanvas(windowWidth,windowHeight);
}

//Draw runs over and over again
function draw() {
     background('purple');
    fill(200,2,3)
    ellipse(x,y,200,200)
    x = x + 10;
    if (x > width) {
        x = 0;
    }
}