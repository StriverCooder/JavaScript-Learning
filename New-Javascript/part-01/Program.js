
// console.log("Hello Adarsh");
// console.log(1+3);
// console.log(1+3); // alt+shift+down
// // ctrl+shift+p

// let a;
// a=10;
// var b = 20;
// const c = 30;

///// Number Nock Game //////

let computerNumber = 6;
let guess=null;
let count = 0;

while(computerNumber != guess){

    guess = Number(prompt("Enter correct number: "));

    if(isNaN(guess)){
        alert("Number is invalid plese try again!");
    }else if(guess < computerNumber){
        alert("Number is too low!,plese try again");
    }else if(guess > computerNumber){
        alert("Number is too high!,plese try again");
    }else{
        alert("Congratulations... Your gues is correct.");
    }
    count++;
}

alert(`You take ${count} count to guess.`);


////Password checker/////

let password = "alpha";
let noOfAttempts = 0;
let userPassword = null;

while(password != userPassword && noOfAttempts < 4){
    noOfAttempts++;
    userPassword = prompt("Enter Your Password__");
    if(userPassword == password) alert("Congratulations your password is matched.");
    else alert("Plese Try Again..");
}

///////// functions ////////

function alpha(){
    console.log("Hi");
}

alpha();

function beta(){
    return "Beta";
}

console.log(beta());

