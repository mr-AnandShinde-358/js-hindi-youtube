// Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.

// #Primative data types 

// # 7 type: String, Number, Boolearn, null, undefined, Symbol, BigInt

// Number
const score =100;
const scoreValue=101.1;

// Boolean
const isLoggedIn = false;

// null
const outsideTemp = null;

// undefined
let userEmail;

// Symbol - unquickly diffended value

const id=Symbol('123');
const anotherId=Symbol('123');

// BigInt

const bigNumber=122334959975974987n;

console.log(id===anotherId);

// Reference type (Not premative data type)

// Array , Objects, functions 

// Array
const heros =["shaktiman","naagraj","doga"];

// objects

 let mayObj ={
    name:"hitesh",
    age:44,
}

// function

const myFunction= function(){
console.log("hellow world");
}

console.log(typeof bigNumber);