// singleton 
// Object.create()

// create symbol

const mySym=Symbol("key1")

// console.log(typeof mySym);

// object literals
const JsUser={
    name:"Hitesh",
    "full name":"Hitesh Choudhary",
    [mySym]:"mySymbol",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);

// console.log(JsUser["email"]);


// console.log(JsUser."full name")
// console.log(JsUser.full name)
// console.log(JsUser["full name"])

// console.log( JsUser[mySym]);

JsUser.email="hitesh@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email="hitesh@microsoft.com";

// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hellow JS user");
}
JsUser.greetingTwo=function(){
    console.log(`Hellow JS user,${this["full name"]}`);
}

// console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting()); //
console.log(JsUser.greetingTwo()); //