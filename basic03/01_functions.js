function greet(){
    console.log("Good morning");
}
// greet()


// function add(a,b){
//     console.log(a+b);
// }
// add(5,6)


function addTwoNumber(x,y){
    // let result = x+y
    // return result
    // console.log("Abishek"); // Unreachable code detected // Nothing will be printed after return
    return x+y
}
result = addTwoNumber(5,20)
// console.log("Result:",result);

function loginuserMessage(username) {
    return `${username} just sign in.`
}

let user = "Abhishek"
// console.log(loginuserMessage(user));

let userGroup = ["Abhi","Abhishek","Anoint"]
// console.log(loginuserMessage(userGroup[2]));

// console.log(loginuserMessage("coder"));

// console.log(loginuserMessage()); // user is undefined here

function logOn(username = "Abhi"){
    if(!username){
        console.log("Please enter your username: ");
        return
    }
    else return `${username} just logged on.`
}
console.log(logOn());
console.log(logOn("Abishek"))