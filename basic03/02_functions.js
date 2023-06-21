function calculateCartPrice(...num1){ // (...) in function known as rest operator here.
    return num1
}
// console.log(calculateCartPrice(500,600,700));


/*

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
const user1 = {
    username: "Anoint",
    price: 999
}
handleObject(user1)

const user2 = {
    username: "Abhi",
    price: 550
}
handleObject(user2)
*/

/*
// directly pass the object in function
handleObject({
    username:"Abhishek",
    price: 750
})
*/

// Array in function

const myArray = [200,400,300,600]

function secondValue(getArray){
    return getArray[1]
}

// console.log(secondValue(myArray));

// directly pass the array in function
// console.log(secondValue([200,300,400,500]))

function firstValue(getArray){
    return getArray[0]
}
console.log(firstValue);