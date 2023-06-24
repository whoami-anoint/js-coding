const myarray = [0,1,2,3,4,5]
const myHeros = ["Shaktiman", "Hanuman", "Ram"]

const myarray2 = new Array(1,2,3,4,5)
// console.log(myarray[1]);

// Array methods

// myarray.push(6)
// myarray.push(7)
// myarray.pop()

// myarray.unshift(9) // Add value at first index; it changes all position
// myarray.unshift(9) // remove the 1st element of array

// shift () and unshift work as push and pop but in first element

// console.log(myarray.includes(9));
// console.log(myarray.indexOf(9));

// const newArray = myarray.join() // Join: Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myarray);
// console.log(typeof newArray);

// slice, splice 

console.log("A", myarray);
const myn1 = myarray.slice(1, 3)

console.log("a",myn1);
console.log("B",myarray);

const myn2 = myarray.splice(1,3)

console.log("b",myn2);
