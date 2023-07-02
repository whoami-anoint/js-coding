const coding = ["js","ruby","java","python","golang"]

// Method 1 
// coding.forEach(function(items){
//     console.log(items);
// } )

// Method 2
// coding.forEach((item)=>{
//     console.log(item);
// }) 

// Method 3 
// function printMe(items){
//     console.log(items)
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        language:"javascript",
        languageFileName: "js"
    },
    {
        language: "golang",
        languageFileName: "go"
    },
    {
        language: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.language);
})