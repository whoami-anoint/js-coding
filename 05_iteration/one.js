// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;  
//     console.log(element);
// }

// for (let n = 10; n <=100;n++){
//     console.log(n);
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i; 
//     if (element == 5){
//         console.log("7 is the best number");
//     } 
//     console.log(element);
// }

for (let i=1;i<=10;i++){
   // console.log(`Outer loop value: ${i}`);
    for (let j =1 ; j <=10;j++){
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
        // console.log(i + '*'+ j+ '='+i*j);
        // console.log(typeof(i , '*', j, '=',i*j));

    }
}
// we can concat using , and + but the typeof of ',' makes number and '+' makes string

// let myArray = ["flash","batman","superman"]
// // console.log(myArray.length)
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }


// break and continue

// break

// stops till detected

// for (let i = 1; i <= 20;i++){
//     if (i ==5){
//         console.log(`Detected 5`);
//         break
//     }    
//     console.log(`Value of i is ${i}`);
// }

// continue
// skip and continue
for (let i = 1; i <= 20;i++){
    if (i ==5){
        console.log(`Detected 5`);
        continue
    }    
    console.log(`Value of i is ${i}`);
}