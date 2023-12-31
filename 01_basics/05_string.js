const name="hitesh";
const repoCount =50;

// console.log(name + repoCount +" value");


// console.log(`Hellow my name is ${name} and my repo count is ${repoCount}`);


const gameName=new String('hitesh-hd-com');

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString =gameName.substring(-8,4);
console.log(newString);

const anotherString =gameName.slice(-8,4);

console.log(anotherString);

const newStringOne ="   hitesh   ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));
console.log(url.includes('anand'));

console.log(gameName.split('-'));

// NOtes

// When String is called as a constructor (with new), it creates a String object, which is not a primitive.

// When String is called as a function, it coerces the parameter to a string primitive.

/*
const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
a instanceof String; // is true
b instanceof String; // is false
typeof a; // "object"
typeof b; // "string"

*/
