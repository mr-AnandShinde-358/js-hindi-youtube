const name="hitesh";
const repoCount =50;

// console.log(name + repoCount +" value");


// console.log(`Hellow my name is ${name} and my repo count is ${repoCount}`);


const gameName=new String('hitesh-hd');

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