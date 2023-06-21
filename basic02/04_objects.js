// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "21BSDC129"
tinderUser.name = "Abishek"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullname: {
            firstname: "Abishek",
            lastname : "Kafle"
        }
    }
}

// console.log(regularUser.fullName .userFullname.firstname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2} // mostly used 
// console.log(obj3);

const users = [
    {
        id: 1,
        
    }
]

// console.log(users);

// console.log(Object.keys(tinderUser)); // to get keys from the object
// console.log(Object.values(tinderUser)); // to get values of the keys in the object
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('name')); // conform the keys are exists or not

const course = {
    coursename: "js tutorials",
    price: 999,
    courseInstructor: "anoint"
}
// console.log(course.courseInstructor);
// console.log(course["courseInstructor"]);

// const {price}= course
// console.log(price);

const {price:cost} = course // destructure the object; or price renamed as cost here
// console.log(cost);

// json format
// {
//     "name" : "Abishek",
//     "coursename": "js tutorials",
//     "price":"free"
// }

// [
//     {},
// ]

// https://randomuser.me/