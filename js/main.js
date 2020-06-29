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
var car = {
    type : "Clio",
    brand : "Renault",
    date : 2006,
    color : "orange",
    passengers : ["Mike", "Claire", "Anna", "Louis"]
};

console.log(car);

console.log("Une " + car["brand"] + " " + car["type"] + " de couleur "
 + car["color"] + ", modèle " + car["date"] + " a été aperçue avec à son bord 4 passagers");

 console.log(car["passengers"][0]);
 // tableau multi-dimentionel

 console.log("4 individus ont été aperçus à son bord : " + car["passengers"][0] + " " + 
 car["passengers"][1] + " "  + car["passengers"][2] + " " 
 + car["passengers"][3]);

// ~~~~~~~ Exercice 6 ~~~~~~~~  
var a = 14;
var b = 38;

var product = [];

console.log(a + " " + b + " " + product)

product [0] = a;
product [1] = b;
product [7] = 50;

console.log(product);

// le tableau a été rempli de "cases" vides 