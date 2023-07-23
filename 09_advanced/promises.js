const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve()
    },1000)

}).then(function(){
    console.log("Sync two resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Anoint",email:"anoint@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"abhi",password:"abc"})
        } else{
            reject('ERROR: Something went wrong')
        }
    },1000)
}) 

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Finally Done");
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"abhishek",password : "abhi@123"})
        } else{
            reject('Please input your valid password')
        }
    },1000)
})
 
async function consumePromiseFIve(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error){
        console.log(error)
    }
}
consumePromiseFIve()