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
// Object.freeze(JsUser)

// value will not change after freeze

JsUser.email = "anoint@github.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello world");
}
console.log(JsUser.greeting);