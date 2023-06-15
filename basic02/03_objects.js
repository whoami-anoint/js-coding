// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    "full name": "Abishek",
    age: 24,
    location: "Nepal",
    email: "anoint@hackerone.com",
    [mySym] : "mykey1",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["age"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "anoint@google.com"
Object.freeze(JsUser)

JsUser.email = "anoint@github.com"
console.log(JsUser.email);

const equality = []==[]
console.log(equality);