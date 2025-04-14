// write a variable that is a string and output to console (hint: it's console.log(variable name))
let whoIsTheWalrus = "I am the walrus"
console.log(whoIsTheWalrus);

// write a variable that is a number and output to console (hint: it's console.log(variable name))
let theAnswer = 42;
console.log(theAnswer);

// write a variable that takes any two numbers and adds them 
let twentyOne = 9+10;
console.log(twentyOne);



// write a variable that takes any two numbers and subtracts them and output to console

let myAge = 2025-2006;
console.log(myAge);



// write a variable that takes any two numbers and performs a modulo that has a value of 1  and output to console
let thisEpicModulo = 11%2
console.log(thisEpicModulo)

// write a variable that takes any two numbers and perform an exponential value and output to console 
let exponentialExample = 3.14**2
console.log(exponentialExample)

// write a statement that is false using a conditional statement and output to console 
let good = 1
let evil = 2 
let millerAllen = good;
let millersEvilTwin = evil;
console.log(millerAllen == millersEvilTwin);


// I have created an object below, output to console the value of "breed" (hint: the structure is ObjectName.value you want to call)
// the keyword "this" is self referencing the object 

let siggy = {
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {

        return `Siggy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`


    }
}

console.log(siggy.breed);

// methods! You call methods the same way you call a function.  I'll call siggy.output() below. 

console.log(siggy.output()); 

// copy + paste the siggy object below and rename the variable from Siggy to an animal or name of your choice 
// then, I want you to change the object to the value of your choosing  

let toro = {
    breed : "humanoid cat", 
    wants: "wants to live a normal human life", 
    output: function() {

        return `Toro is a ${this.breed} who ${this.wants}`

    }
}
console.log(toro.output()); 
// console.log the values of that object one by one. 
console.log(toro.breed);
console.log(toro.wants);


// create an array 

let epicArrray = [0,1,2,3,4,5,6,7,8,9]

// call the value in the 3 position of this array and output to console 

let someArray = ["Ishrat", "Is", "Really", "Proud", "Of", "You"]

let thirdPosition = someArray[2];
console.log(thirdPosition);

// call all values in the array using a loop 

for(let i = 0; i < someArray.length;i++){
    console.log(someArray[i]);
}

// what is the value of the variable ifStatement, leave your answer in the console. 

let ifStatement; 
let value = 5; 

if(value < 5)
{
    ifStatement = true;
}

else{
    ifStatement = false; 
}

consoleAnswer = "the vale of the if statement is equal to or greater than five"
console.log(consoleAnswer)
console.log(ifStatement)