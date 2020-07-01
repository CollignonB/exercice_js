// ~~~~~ Exo 1 ~~~~~~
var nombre = Math.random();

console.log(nombre);

// ~~~~~ Exo 2 ~~~~~~
var number = 12.42359;
console.log(number);

console.log(Math.round(number  * 100) / 100);

// ~~~~~ Exo 3 ~~~~~~
var age = "35";
console.log(typeof(age));

console.log(typeof(parseInt(age)));

age = parseInt(age);

// ~~~~~ Exo 4 ~~~~~~

var texte = "az";
var maxLength = 20;
console.log(texte.length);

if (texte.length > maxLength){
    console.log("Your texte is too long");
}else {
    console.log("Ok");
}

// ~~~~~ Exo 5 ~~~~~~

var text = "A nice boat";
console.log(typeof(text));

var chaine = text.split(' ', 3);
// le deuxième argument permet de choisir le nombre d'éléments à renvoyer
console.log(chaine);


// ~~~~~ Exo 6 ~~~~~~

var name = "Paul Dumas";
var expectedName = "paul dumas";

if (name.toLowerCase() === expectedName) {
  console.log("OK Paul you can come in");
}
else {
  console.log("We do not know you");
}

// ~~~~~ Exo 7 ~~~~~~

var newStudent =  "Ryan Oper";

var students = [
    "John Doe", 
    "Jane Doe", 
    "Marc Alm", 
    "Jimmy Turner"
];


console.log(typeof(newStudent));
console.log(typeof(students));


students.push(newStudent);
// console.log(students);
students.push('Franck Martin', 'Tom Hawkins');

// console.log(students);

// ~~~~~ Exo 8 ~~~~~~

var transactions = [102,50,4563,42,78,146,10563];
var researched = 42;

console.log(transactions.includes(researched));

if (transactions.includes(researched)){
    console.log("We found a matching transaction");
}else {
    console.log("No match");
}

// ~~~~~ Exo 9 ~~~~~~