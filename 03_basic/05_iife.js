// Immediately Invoked Function Expression (IIFE)

/*
(function laptop(){
    console.log(`DB CONNECTED`);
})()
*/

// (() => console.log(`DB CONNECTED))()

((name) => console.log(`DB CONNECTED ${name}`))('anoint')

// DB CONNECTED anoint