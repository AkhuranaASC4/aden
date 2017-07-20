//var firstRequest = "Welcome";
//var secondRequest = "Please type the sentence below, correctly";
var inp
//inp.position(0,17)
//inp.size(0,10)
//}


function setup()  {
    createCanvas(windowWidth,windowHeight);
    background('red')
    inp = createInput('', "text");
    inp.position(100,500)
    inp.size(75e,50)
    textSize(25);
    text("Please type the sentence below, correctly.", 10, 60);
    fill(0,0,0); 
    textSize(25)
    text("This is very hard", 50,200);
    fill(0,0,0);
}


function keyTyped() {
    console.log(key)
    if (key === ""){
        var sample = ("This is very hard")


    }
}


var inp
//inp.position(0,17)
//inp.size(0,10)
//}


function setup()  {
    createCanvas(windowWidth,windowHeight);
    background('red')
    inp = createInput('', "text");
    inp.position(100,300)
    inp.size(550,100)
    textSize(25);
    text("Please type the sentence below, correctly.", 10, 60);
    fill(0,0,0); 
    textSize(25)
    text("This is very hard", 50,200);
    fill(0,0,0);
    var x = 0
}


function keyTyped() {
    console.log(key)
        var sample = ("This is very hard") 

    if(keyCode === ENTER) {
        if (inp.value() === sample) {
            alert ("You Win!");}
        
    else{
        alert ("You Lost!");}
    }
}







//function draw() {
 //    textSize(25);
//text("Please type the sentence below, correctly.", 10, 60);
//fill(0,0,0); 
//textSize(25)
//text("This is very hard", 50,200);
//fill(0,0,0);
