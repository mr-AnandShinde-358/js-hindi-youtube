// fetch('https://somthing.com').then().catch().finally()

const promiseOne= new Promise(function(resolve,reject){
// Do an async task
// DB Calls, cryptography, network 

setTimeout(function(){
    console.log('Async task is completed')
    resolve()
},1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})


const promiseThree =new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task three");
        resolve({userName:"Chai",email:"chai@example.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve,reject){
setTimeout(function(){
    let error = true;
    if(!error){
        resolve({userName:"hitesh",email:"anand@gmail.com"})

    }else{
        reject('Error:Something went Wrong')
    }
},1000)
})

// promiseFour.then().catch()
/* promiseFour.then(function(user){
console.log(user)
}).catch(function(message){
console.log(message)
}) */


// do not do 
/* const userName= promiseFour.then((user)=>{
    console.log(user)
    return user.userName
}).catch(function(error){
    console.log(error)
})
console.log(userName) */

//then().then().catch() chaning concept

/* promiseFour.then((user)=>{
    console.log(user)
    return user.userName
}).then((user)=>{
    console.log(user)
}).catch(function(message){
    console.log(message)
}) */

// improve readibility
/* promiseFour
.then((user)=>{
    console.log(user)
    return user.userName
})
.then((user)=>{
    console.log(user)
})
.catch(function(message){
    console.log(message)
}) */

// useing fanaly keyword its definatly run
promiseFour
.then((user)=>{
    console.log(user)
    return user.userName
})
.then((user)=>{
    console.log(user)
})
.catch(function(message){
    console.log(message)
}).finally(()=>console.log('The promise is either resolced or rejected'))





const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName:"javascript",password:123})
    
        }else{
            reject('Error:JS went Wrong')
        }
    },1000)
})

// do not do this
/* async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response)
} */

/* async function consumePromiseFive(){
    try {
        const respons= await promiseFive
        console.log(respons)
        return respons.userName
    } catch (error) {
         console.log(error)
    }
}
// for returning value using async
// consumePromiseFive().then((x)=>console.log(x))
// console.log(newuser)
 */




 async function consumePromiseFive(){
    try {
        const respons= await promiseFive
        console.log(respons)
       
    } catch (error) {
         console.log(error)
    }
}

consumePromiseFive()
 

/* async function getAllUsers(){
  try {
    const response= await  fetch('https://jsonplaceholder.typicode.com/users')

 
    const data= await response.json()
    console.log(data)
  } catch (error) {
   console.log(error) 
  }
}
getAllUsers()
 */


/* fetch('https://jsonplaceholder.typicode.com/users').then((respons)=>{
    // console.log(respons.json()) // return a promise padding statement
     return respons.json()

}).then(response=>console.log(response)).catch((error)=>console.log(error)) */

fetch('https://api.github.com/users/hiteshchoudhary').then((respons)=>{
  
     return respons.json()

}).then((data)=>{
    console.log(data)
}).catch((error)=>console.log(error))