// Welcome to my game//

var mashArray = ["Final destination", "Battlefield", "Delfino Plaza", "Mario Circuit"];
var firstQuestion = ["1", "2"];
var secondQuestion = ["Mario" , "Wario"];

var prompt = require('prompt-sync')();
var name = prompt("How many times will you strike? ") + "[" + firstQuestion + "] 

var answer = prompt("Who will you choose to fight? ");
var destination = prompt ("Where do you want to fight? ");


console.log("You fought " + secondQuestion);
console.log("in the " + mashArray);
console.log("and hit them " + firstQuestion);
console.log("Too bad Mewtwo wins! ");
