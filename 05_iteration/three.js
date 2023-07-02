// for of

// ["","",""]
// [{},{},{}]
const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

// const greetings = "Hello world!"
// for (const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States")

// console.log(map);

// for (const key of map){
//     console.log(key);
// }

for (const [key,value] of map){
    console.log(key,':',value);
}

/*
const myObject = {
    game1: 'ludo',
    game2: 'chess'
}

// for of doesn't work in myObject
// for (const [key] of myObject){
//     console.log(key);
// }  
*/
