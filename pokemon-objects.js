var roster =  [
["Charizard" , "Fire", 78, 78, 84, false],
["Pikachu" , "Electric" , 35, 40, 55, false],
["Genesect" , "Steel" , 71, 95, 120, true],
["Sandslash" , "Ground" , 75, 110, 100, false],
["Metagross" , "Steel" , 80, 130, 135, false],
["Rayquaza", "Flying", 105, 90, 150, true],
]


function Pokemon(name, type, hp, defense, attack, legendary){
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.defense = defense;
    this.attack = attack;
    this.legendary = legendary;

}

var Charizard = new Pokemon("Charizard" , "Fire", 78, 78, 84, false)
console.log(Charizard.name)
console.log(Charizard.type)
console.log(Charizard.hp)
console.log(Charizard.defense)
console.log(Charizard.attack)
console.log(Charizard.legendary)

var Pikachu = new Pokemon("Pikachu" , "Electric" , 35, 40, 55, false)
console.log(Pikachu.name)
console.log(Pikachu.type)
console.log(Pikachu.hp)
console.log(Pikachu.defense)
console.log(Pikachu.attack)
console.log(Pikachu.legendary)

var Genesect = new Pokemon("Genesect" , "Steel" , 71, 95, 120, true)
console.log(Genesect.name)
console.log(Genesect.type)
console.log(Genesect.hp)
console.log(Genesect.defense)
console.log(Genesect.attack)
console.log(Genesect.legendary)

var Sandslash = new Pokemon("Sandslash" , "Ground" , 75, 110, 100, false)
console.log(Sandslash.name)
console.log(Sandslash.type)
console.log(Sandslash.hp)
console.log(Sandslash.defense)
console.log(Sandslash.attack)
console.log(Sandslash.legendary)

var Metagross = new Pokemon("Metagross" , "Steel" , 80, 130, 135, false)
console.log(Metagross.name)
console.log(Metagross.type)
console.log(Metagross.hp)
console.log(Metagross.defense)
console.log(Metagross.attack)
console.log(Metagross.legendary)

var Rayquaza = new Pokemon("Rayquaza", "Flying", 105, 90, 150, true)
console.log(Rayquaza.name)
console.log(Rayquaza.type)
console.log(Rayquaza.hp)
console.log(Rayquaza.defense)
console.log(Rayquaza.attack)
console.log(Rayquaza.legendary)

var pokemonRoster = [Charizard, Pikachu, Genesect, Sandslash, Metagross, Rayquaza];
for (var i = 0; i < pokemonRoster.length; i++) {
    console.log(pokemonRoster[i])
}


function printRoster() {
    for(var i = 0; i < pokemonObjectArray.length; i++){
            console.log(pokemonObjectArray[i]);
    }
} 
//printRoster();

function pokemonAttack(){
     for(var i = 0; i < pokemonObjectArray.length; i++){
        pokemonObjectArray[i].HP -= 10;
    }
}
pokemonAttack(); 
printRoster();
