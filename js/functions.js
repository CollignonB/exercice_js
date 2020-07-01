// ~~~~~~ exercice 1 ~~~~~~

function product (a, b){
    return a * b;
}

var produit = product(3, 4);
console.log("The result of the function is : " + produit);


// ~~~~~~ exercice 2 ~~~~~~

function showDigits (){
    for (let i = 0; i < 10; i++){
        console.log(i);
    }
}
// showDigits();
// ~~~~~~ exercice 3 ~~~~~~

function welcome (firstname, lastname){
    console.log("Welcome to our site " + firstname + " " + lastname);
}

welcome("Baptiste", "Collignon");
welcome();

// ~~~~~~ exercice 4 ~~~~~~

function isAdult (age){
    if (age < 18 || age === undefined ){
        return false;
    } else {
        return true;
    }
}

console.log(isAdult());

// ~~~~~~ exercice 5 ~~~~~~

function birthYear(age){
    var year = new Date('July 1, 2020, 10:35:22');
    if (typeof(age) !== "number"){
        return "No age given";
    }else{
        var birth = year.getFullYear() - age;
        return birth;
    }
}

console.log(birthYear("25"));

// ~~~~~~ exercice 6 ~~~~~~

var user = {
    firstname: "John",
    lastname: "Doe",
    age: 42,
    job: "dev"
};

function idCard(user){
    var chain = "";
    for (data in user){
        
        chain += data + " : " + user[data] + "\n";
    }
    return chain;  
}

console.log(idCard(user));