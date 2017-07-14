function Car(color, weight) {
    this.color = color;
    this.weight = weight;
}

var jeep = new Car("Black", 1)

function Player(team, position, number) {
    this.team = team;
    this.position = position
    this.number = number
    this.sayNumber = function() {
        console.log("My number is " + this.number)
    }
}

var JamesHarden = new Player("Rockets", "Point Guard", 13)

function Person(ethnicity, race, nationality) {
    this.ethnicity = ethnicity
    this.race = race
    this. nationality = nationality
}

var jordan = new Person("Asian" , "African-American", "American");

function Sneakers(brand , type , color) {
    this.brand = brand
    this.type = type
    this.color = color
}

var Nike = new Sneakers("Nike" , "Running" , "Black");

console.log(Nike.brand);
console.log(Nike.type);
console.log(Nike.color);
console.log(jeep.color);
console.log(jeep.weight);

