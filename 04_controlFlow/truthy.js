const userEmail = []

if (userEmail){
    console.log("Got user email");
}else{
console.log("Don't have user email");
}

// falsy values
// false, 0, -0 , BigInt 0n, "", null, undefined,NaN

// truthy values
"0", 'false', " ", [],{},function(){}

// if (userEmail.length ===0){
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj.length===0)){
//     console.log("Object is empty");
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length ===0){
//     console.log("object is empty");
// }

// Nullish coalescing operator (??):null undefined

let val1;
val1 = 5 ?? 10
// val1 = null ?? 10 //output: 10

// val1 = undefined ?? 15  // output : 15

val1 = null ?? 10 ?? 15 // value which comes first; output: 10

console.log(val1);


// Terniary operator

// condition ? true : false

const iceCreamPrice = 100
iceCreamPrice <= 80 ? console.log("less than 80"): console.log("more than 80");