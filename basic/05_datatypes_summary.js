// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;
// console.log(isLoggedIn);

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);


const bigNumber = 345639888n
// console.log(typeof bigNumber);

// Javascript is a dynamically typed. 

// Non-Primitive (Reference)
// Array, Objects, Functions

const heros = ["shaktiman","nagaraj","doga"];
let myObj = {
    name: "Abishek",
    age: 24
}
// console.log(myObj);

const myFunction = function(){
    // console.log("Hello world");
}
myFunction()

// console.log(typeof myFunction);

// ++++++++++++++++++++++++++++++++++++++++++++++++
// stack (Primitive), Heap (Non-Primitive)
let myYoutubename = "Alpha Geek"