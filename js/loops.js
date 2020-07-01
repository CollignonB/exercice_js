// ~~~~Exercice 1 ~~~~~~~
var i =0;
while (i <= 9){
    console.log("one run of the loop");
    i+=2;
}
// boucle infinie

// ~~~~Exercice 2 ~~~~~~~
for (var i = 0; i <= 9; i+=2){
    console.log("one run of the loop");
}
// Plus pratique pour la lectures des instructions

// // ~~~~Exercice 3 ~~~~~~~
// for (var i = 0; i <= 100; i+=2){
//     console.log(i);
// }

// // ~~~~Exercice 4 ~~~~~~~
// for (var i = 0; i <= 100; i++){
//     i%2 == 0 ? console.log(i + " is even") : console.log(i + " is odd");    
// }

// ~~~~Exercice 5 ~~~~~~~
var items = ["First item", "Second item", "Third item", "Fourth item"];

for (var i = 0; i < 4; i++){
    console.log(items[i]);
}

// ~~~~Exercice 6 ~~~~~~~
customers = [
    "Albin Term",
    "Anna Sandgrove",
    "John Doe",
    "Terrance Head",
    "Yan Mock",
    "Zoe Durst"
  ];
  console.log("List of all customers :");
  for (i=0; i < 4; i++) {
    console.log(customers[i]);
  }
// ~~~~Exercice 7 ~~~~~~~
console.log("~~~~~~ exercie 7")
var items = ["First item", "Second item", "Third item", "Fourth item"];
for (var item of items) {
    console.log(item);    
}
// ~~~~Exercice 8 ~~~~~~~
console.log("~~~~~~~~ exo 8 ~~~~~~~~");
var citizen = {
    firstname: "Jhon",
    lastname: "Doe",
    age: 45,
    income: 60000,
    sexe: 1
}
// citizen["sexe"] === 0 ? citizen["sexe"] = "male" : citizen["sexe"] = "female";
console.log("Citizen identity :");
for ( info in citizen){
        // if (citizen["sexe"] === 0){
    //     citizen["sexe"] = "male";
    // } else if(citizen["sexe"] === 1) {
    //     citizen["sexe"] = "female";
    // }
   // console.log(citizen["sexe"]);
    if (citizen[info] === citizen["sexe"]){
      if (citizen["sexe"] === 0){console.log(info + " : Male");}
      else if (citizen["sexe"] === 1){console.log(info + " : Female");}
    }else {
    console.log(info + " : " + citizen[info]);
    }

}

// ~~~~Exercice 9 ~~~~~~~
var citizens = [
    {
      "firstname" : "John",
      "lastname" : "Doe"
    },
    {
      "firstname" : "Anna",
      "lastname" : "Molner"
    },
    {
      "firstname" : "Harry",
      "lastname" : "Trueman"
    },
    {
      "firstname" : "Cecile",
      "lastname" : "Mercier"
    }
  ];
  console.log("~~~~~~~~ exo 9 ~~~~~~~~")
  // for (var i = 0; i < 4; i++){
  //   console.log("Citizen :");
  //     for (var id in citizens[i]){
  //         console.log(id + " : " + citizens[i][id]);
  //     }
  // }
  for (var i = 0; i < 4; i++){
    console.log("Cititzen :");
    var zblah = Object.keys(citizens[i]);
    for (var j = 0; j < 2; j++){
      j === 0 ? console.log(Object.keys(citizens[i])[j] + " : " +  citizens[i]["firstname"]) : console.log(Object.keys(citizens[i])[j] + " : " +  citizens[i]["lastname"]);
      
    }
  }

