// ~~~~~~~ Exercice 1 ~~~~~~~~ 
var items = new Array();
console.log(items);

items = [];
console.log(items);

//items = ();

items = ["a", "b"];
console.log(items);

// ~~~~~~~ Exercice 2 ~~~~~~~~ 
var items = [
    "première élément",
    "deuxième élément",
    "troisième élément",
    "quatrième élément"
] 

console.log(items);
console.log(items[1]);
console.log(items[3]);
console.log(items[0]);

// ~~~~~~~ Exercice 3 ~~~~~~~~ 
var player = [
    "John",
    "Doe",
    34,
    true
];

console.log(player);
console.log(player[0]);
console.log(player[0] + " " + player[1]);

player[2] = 40;
console.log(player[2]);

// NON !!!!

// ~~~~~~~ Exercice 4 ~~~~~~~~ 
var player = {
    firstname : "John",
    lastname : "Doe",
    age : 34,
    isAdult : true
};
console.log(player);
console.log(player["firstname"]);
console.log(player["lastname"]);
console.log(player["firstname"] + " " + player["lastname"]);

player["age"] = 40;
console.log(player["age"]);

console.log(player["isAdult"]);

// Beaucoup plus lisible pour un développeur 

// ~~~~~~~ Exercice 5 ~~~~~~~~
// ~~~~~~~ Exercice 6 ~~~~~~~~  