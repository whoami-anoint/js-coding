// let date = new Date()
/*
console.log(date);

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof date);

// Output:
2023-06-12T10:34:25.510Z
Mon Jun 12 2023 16:04:25 GMT+0530 (India Standard Time)
Mon Jun 12 2023
6/12/2023, 4:04:25 PM
object
*/

// let myCreatedDate = new Date(2023,0,23) // Declare date manually; Month 0 = Jan
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());

// let mynewDate = new Date(2023,0,23,5,3)
// console.log(mynewDate.toLocaleString());

// let timeStamp = Date.now()
// console.log(timeStamp);

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+1);

// let text = `Today is ${newDate.getDay()} and time`
// console.log(text);

latestDate = newDate.toLocaleString('default',{
    weekday : "long", 
    timeZoneName: "longGeneric"
})
console.log(latestDate);

