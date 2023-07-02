const myObject = {
    js: 'javascript',
    py:'python',
    go:'golang'
}

// for (const key in myObject) {
//     console.log(myObject[key]);
// }

for (const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java"]

// for(const key in programming){
//     console.log(key);
// }


for (const key in programming) {
//    console.log(programming[key]);
}

/*
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States")

for (const key in map){
    console.log(key);
}

// map is not iterable
*/