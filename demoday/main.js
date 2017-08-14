let button;
var place = ["New York City, New York","London, England","Venice, Italy", "Paris, France", "New Delhi, India", "Sydney, Australia","Beijing, China", "Nuremberg, Germany", "Quebec City, Canada", "Singapore", "Rome, Italy", "Melbourne, Australia", "Vienna, Austria", "Barcelona, Spain", "Madrid, Spain", "Victoria, British Columbia", "Vancouver, British Columbia","San Miguel de Allende, Mexico", "Mexico City, Mexico", "Lucerne, Switzerland", "Florence, Italy", "Kyoto, Japan", "Tokyo, Japan", "Moscow, Russia","Athens, Greece","Cape Town, South Africa","Lagos, Nigeria","Dubai, U.A.E", "Beirut, Lebanon","Cairo, Egypt",  ];

function shuffle() {
  
    var location = Math.floor(Math.random () * place.length)
    $("body").append(`<p><center><font color='black'><font size='10'>Travel Destination: ${place[location]}</font></font></center></p>`)
}

console.log(shuffle ())

// function setup (){
//     button = createButton('Fight');
// button.position(20,400);
// button.mousePressed(shuffle);
// }