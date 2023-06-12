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
let anothername = myYoutubename
// console.log(myYoutubename);
// console.log("before:",anothername);
anothername = "Coder"
// console.log(myYoutubename);
// console.log("after:",anothername);

/* Note: 
assign youtubename
If anothername = myYoutubename,
and change youtubename value but anothername remain same as previous
and if anothername value changed, myYoutubename remain same.
*/

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
// console.log(userOne.email);

// let userTwo = {
//     email: "user2@google.com",
//     upi: "user2@ybl"
// }

// console.log(userTwo.email);

// userOne.age = 23
// console.log(userOne);

let userTwo = userOne
console.log("user2 before change:",userTwo);

userOne.email = "anoint@google.com"
console.log("user2 after change user1:",userTwo);

/* But in dictionary
When userTwo = userOne;
if userTwo value changed,userOne value will also changed
and if userOne value change, userTwo value will also changed

It's called heap memory. We got reference in heap.
*/