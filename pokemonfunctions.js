var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetLength = alphabet.length
function randLetter(index) {
    var randomIndex = Math.random() * index;
    var result = Math.floor(randomIndex);
    return result;
}

console.log(alphabet[randLetter(alphabet.length)]);


var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetLength = alphabet.length
function randWord(index) {
    var randomIndex = Math.random() * index;
    var result = Math.floor(randomIndex);
    return result;
}

console.log(alphabet[randWord(alphabet.length)]);

