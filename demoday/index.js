// let button;
// var place = ["New York City, New York","London, England","Venice, Italy", "Paris, France", "New Delhi, India", "Sydney, Australia","Beijing, China", "Nuremberg, Germany", "Quebec City, Canada", "Singapore", "Rome, Italy", "Melbourne, Australia", "Vienna, Austria", "Barcelona, Spain", "Madrid, Spain", "Victoria, British Columbia", "Vancouver, British Columbia","San Miguel de Allende, Mexico", "Mexico City, Mexico", "Lucerne, Switzerland", "Florence, Italy", "Kyoto, Japan", "Tokyo, Japan", "Moscow, Russia","Athens, Greece","Cape Town, South Africa","Lagos, Nigeria","Dubai, U.A.E", "Beirut, Lebanon","Cairo, Egypt",  ];

// function shuffle() {
  
//     var location = Math.floor(Math.random () * place.length)
//     $("body").append(`<p><center><font color='black'><font size='10'>Travel Destination: ${place[location]}</font></font></center></p>`)
// }

// console.log(shuffle ())

// function setup (){
//     button = createButton('Fight');
// button.position(20,400);
// button.mousePressed(shuffle);
// }

const playerTwo = ["Rock","Paper","Scissors"];
let score = 0;
let scoreUpdated;
let myName;
/* Choices */
//var randomChoice = Math.floor(Math.random () * playerTwo.length);
//console.log(randomChoice)
//var p2Choice = playerTwo[randomChoice]; // Random
function updateDB(){
    const name = $("#name").val();
    const message = $("#message").val();
    myName = name
    console.log(`${name} : ${message}`);
    $("body").append(`<p><center><font color='white'><font size='10'>Hello: ${name}</font></font></center></p>`)
    //Update database here
    
    
}
function rock1(){
    const randomChoice = Math.floor(Math.random () * playerTwo.length);
    const p2Choice = playerTwo[randomChoice]; // Random
    $("#score").html(`<p><center><font color='white'><font size='10'>Score: ${score}</font></font></center></p>`)
    $("#result").html("<p><center><font size='5'> You selected Rock! </center></p>")
    $("#result").append(`<p><center><font size='5'>The computer selected ${p2Choice}</center></p>`)
    if (p2Choice == playerTwo[0]) {
        $("#result").append("<p><center><font size='5'> It's a tie! </center></p>")
        $("#result").append("<p><center><font size='5'> Try again! </center></p>")
        
    }
    if (p2Choice == playerTwo[1]) {
        $("#result").append("<p><center><font size='5'> The Computer beat you! </center></p>")
        $("#result").append("<p><center><font size='5'> Try again! </center></p>")
        
    }
    if (p2Choice == playerTwo[2]) {
        $("#result").append("<p><center><font size='5'> You beat the Computer! </center></p>")
        $("#result").append("<p><center><font size='5'> Choose another weapon or use the same! </center></p>")
        score = score + 10
        $("#score").html(`<p><center><font color='white'><font size='10'>Score: ${score}</font></font></center></p>`)
        scoreUpdated = score
        
    }
    
}
function paper1(){
    const randomChoice = Math.floor(Math.random () * playerTwo.length);
    const p2Choice = playerTwo[randomChoice]; // Random
    $("#score").html(`<p><center><font color='white'><font size='10'>Score: ${score}</font></font></center></p>`)
    $("#result").html("<p><center><font size='5'> You selected Paper! </center></p>")
    $("#result").append(`<p><center><font size='5'> The computer selected ${p2Choice}</center></p>`)
    if (p2Choice == playerTwo[0]) {
        $("#result").append("<p><center><font size='5'> You beat the computer! </center></p>")
        $("#result").append("<p><center><font size='5'> Choose another weapon or use the same! </center></p>")
        score = score + 10
        $("#score").html(`<p><center><font color='white'><font size='10'>Score: ${score}</font></font></center></p>`)
        scoreUpdated = score
        
    }
    if (p2Choice == playerTwo[1]) {
        $("#result").append("<p><center><font size='5'> It's a tie! </center></p>")
        $("#result").append("<p><center><font size='5'> Try again! </center></p>")
    }
    if (p2Choice == playerTwo[2]) {
        $("#result").append("<p><center><font size='5'> The Computer beat you! </center></p>")
        $("#result").append("<p><center><font size='5'> Try again! </center></p>")
    }
}
function scissors1(){
    
    const randomChoice = Math.floor(Math.random () * playerTwo.length);
    const p2Choice = playerTwo[randomChoice]; // Random
    $("#score").html(`<p><center><font color='white'><font size='10'>Score: ${score}</font></font></center></p>`)
    $("#result").html("<p><center><font size='5'> You selected Scissors! </center></p>")
    $("#result").append(`<p><center><font size='5'> The computer selected ${p2Choice}</center></p>`)
    if (p2Choice == playerTwo[0]) {
        $("#result").append("<p><center><font size='5'> The Computer beat you! </center></p>")
        $("#result").append("<p><center><font size='5'> Try again! </center></p>")
    }
    if (p2Choice == playerTwo[1]) {
        $("#result").append("<p><center><font size='5'> You beat the Computer! </center></p>")
        $("#result").append("<p><center><font size='5'> Choose another weapon or use the same! </center></p>")
        score = score + 10
        $("#score").html(`<p><center><font color='white'><font size='10'>Score: ${score}</font></font></center></p>`)
        scoreUpdated = score
        
    }
    if (p2Choice == playerTwo[2]) {
        $("#result").append("<p><center><font size='5'> It's a tie! </center></p>")
        $("#result").append("<p><center><font size='5'> Try again! </center></p>")
    }
}
function submitScore() {
    firebase.database().ref(myName).set(
        
        {
            
            HighScore : scoreUpdated
           
        }
    )
}
// Show data
 var database = firebase.database().ref()
database.on("child_added",  function(rowData) {
    $("body").append("<div><em><font size='5'>"+rowData.key+" : "+rowData.val().HighScore+"</em></font></div>");
}) 