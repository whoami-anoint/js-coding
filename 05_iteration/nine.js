const myNums = [1,2,3]

// Method 1: 
// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)
// console.log(myTotal);


// Method 2:
// const myTotal = myNums.reduce( (acc,currval) => acc+currval,0)

// console.log(myTotal);

/*
const pickupLines = [
    "Are you an array1?",
    "Because I want to reduce the distance between us."
  ];
  
  const result = pickupLines.reduce((acc, line) => acc + " " + line);
  console.log(result);
*/

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "python course",
        price: 1999

    },
    {
        itemName: "golang course",
        price : 2999
    },
    {
        itemName: "java course",
        price: 3999
    },
    {
        itemName: "hacking course",
        price: 4999
    }
]

const itemPrice = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(itemPrice);
