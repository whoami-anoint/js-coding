const name = "anoint"
const repocount = 24

// console.log(name + repocount + " Value"); // Bad method

// console.log(`Hello my name is ${name} and my repo count is ${repocount}`); // Best method


const gameName = new String('abhishekkafle')
// console.log(gameName);
// console.log(gameName.length); // find length
// console.log(gameName.toUpperCase()); // to make capital
// console.log(gameName.substring()); // to make small
// console.log(gameName.charAt(2)); // find out 2nd character
// console.log(gameName.indexOf("i")); // find index position

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 7)
// console.log(anotherString);

const newStringOne = "           Abishek     "
// console.log(newStringOne); 
// Removes the leading and trailing white space and line terminator characters from a string.
// console.log(newStringOne.trim());

const url = "https://anoint.com/anoint%20coder"

// console.log(url.replace("%20","-")) // replace the value

// console.log(url.includes('abhi')); // Check the string includes or not and result in true/false

// console.log(url.split("p")) // remove the value 'p' and split

let text1 = "Java";
let text2 = "Script";
let result = text1.concat(text2);
let result1 = text1.concat(" ", text2);
console.log(result);
console.log(result1);