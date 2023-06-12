const score = 400
// console.log(score);

const balance = new Number(24)
// console.log(balance);
// console.log(balance.toString().length); Number to string and count length
// console.log(balance.toFixed(2)); // make fixed the number 24 => 24.00

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(2));   // exponential or fixed-point notation with a specified number of digits
// roundoff then ouput will be : 124

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); Indian standard number system

// ++++++++++++++++ Maths +++++++++++++++++++

// Math functions

// console.log(Math.PI); // Value of PI
// console.log(Math.abs(-4)); // Negative to positive
// console.log(Math.pow(5,2)); // 5 power 2 => 25 
// console.log(Math.sqrt(25)); // find square root of number
// console.log(Math.round(4.4)); // Roundoff and output => // Only above 4.5 it will 5, till 4.4 it will be 4
// console.log(Math.ceil(4.2)); // If more than top value (4) then output => 5
// console.log(Math.floor(4.9)); // It take lowest value; Output => 4 even in 4.9

// console.log(Math.max(8,5,7,10,12,2,3,6));
// console.log(Math.min(4,5,6,7,2));
// console.log(Math.random()); // Give value under 0-1; eg. 0.1,0.2,0.3
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 4
 
console.log(Math.floor(Math.random()*(max-min+1))+min);
console.log(Math.floor(Math.random()*(10-4)+4));