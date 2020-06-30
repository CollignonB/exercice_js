// ~~~~~~ Exo 1 ~~~~~~~~

if (true) {
    console.log("Condition is working !");
}
if (false) {
    console.log("Condition is working !");
}
else {
    console.log("Condition is not working !");
}
if (false === false) {
    console.log("Condition is working !");
}
// ~~~~~~ Exo 2 ~~~~~~~~

var data ;

if (data) {
    console.log("Condition is OK");
}
  else {
    console.log("Condition is KO");
}
// Quand content n'est pas assignée, la condition en peut pas être remplie

// ~~~~~~ Exo 3 ~~~~~~~~

var price = "forty five"; 

if (price === 45) {
    console.log("The price is a number");
}
  else if (price == 45) {
    console.log("The price is a string");
}
  else {
    console.log("The price is something else");
}

// ~~~~~~ Exo 4 ~~~~~~~~

var age = 180;

if(age >= 18){
    console.log("Entry allowed");
}
else {console.log("Entry not allowed");}
// ~~~~~~ Exo 5 ~~~~~~~~

var store = ["Walmart", "Colorado", "South-Park", 483,];

// if (store[0] === "Walmart" && store[2] ==="South-Park"){
//     console.log("The Walmart in South-Park has " + store[3] + " employes");
// }
// else if (store[0] === "Walmart" && store[1] === "Colorado"){
//     console.log("Hum this is an other Walmart from Colorado");
// }
// else if (store[0] === "Walmart"){
//     console.log("Too bad this is just a Walmart");
// }
// else {
//     console.log("I do not know what this is");
// }

if (store[0] != "Walmart"){
    console.log("I do not know what this is");
}
else {
    if (store[2] === "South-Park"){
        console.log("The Walmart in South-Park has " + store[3] + " employes");
    }else if (store[1] === "Colorado"){
        console.log("Hum this is an other Walmart from Colorado");
    }else {
    console.log("Too bad thsi is just a Wallmart");
    }
}
// ~~~~~~ Exo 6 ~~~~~~~~

var student = {
    Name : "John Doe",
    Grade : 19,
};

if (student.Grade < 10){
    console.log("Recalé");
}
else if (student.Grade >= 10 && student.Grade < 12){
    console.log("Passable");
}else if (student.Grade >= 12 && student.Grade < 14){
    console.log("Moyen");
}else if (student.Grade >= 14 && student.Grade < 16){
    console.log("Bien");
}else {
    console.log("Très bien");
}
// ~~~~~~ Exo 7 ~~~~~~~~

var meal = {
    foodType : "meat",
    cookedAt : 50,
    temperature : 80
};

if (meal.cookedAt === meal.temperature){
    meal.status = "Cooked";
}
else if (meal.cookedAt < meal.temperature){
    meal.status = "Uncooked";
}else {
    meal.status = "Overcooked";
}
console.log(meal.status);
// ~~~~~~ Exo 8 ~~~~~~~~

var number = 42;
if (number > 0){
    // if (number %2 == 0){
    //     console.log("number is even");
    // }else {
    //     console.log("number is odd");
    // }
    number%2 === 0 ? console.log("number is even" ):console.log("number is odd");
}else {
    console.log("Please enter a number at least greater than 0");
}