/*
if (true){
    let a = 10
    const b = 20
    var c = 30
}


// console.log(a);
// console.log(b);
console.log(c);
*/  

// console.log(myVariable); // Output: undefined
// var myVariable = 'Hello!';

/*
let a = 300
if (true){
    let a = 10
    const b = 20
    console.log("Inner:",a); // block scope
}
console.log(a); // global scope
*/

function one(){
    const username = "whoami-anoint"

    function two(){
        const website = "github"
        console.log(username);  
    }
    // console.log(website);

    two()
}
// one()

if(true){
    const username = "anoint"
    if (username === "anoint"){
        const website = "github"
        // console.log(username,website)
    }
    // console.log(website); // out of scope
}
// console.log(username); // out of scope

// *******************++++++++++ Interesting ++++++++++*******************

console.log(addOne(5)) // it works here

function addOne(num){
    return num + 1
}

// console.log(addTwo(5)); // Error comes because it doesn't works in hoisting

const addTwo = function(num){ // hoisting
    return num + 2
}

