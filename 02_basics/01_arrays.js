// Array
/*
()-Parenthesis
[] - square Brackets
 {} - Curly brackets
 */


 /* 
 1] JavaScript arrays are resizable and can contain a mix of different data types.
 2] JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
 */

//  Array difiend type
/* 
const myHeros=["shaktiman","naagraj"]
const myArr2= new Array(1,2,3,4,5);
const myArr =[0,1,2,3,4,5]


 */
// Array methods

// insert value
// myArr.push(6); 
// myArr.push(7);

// delete last element
// myArr.pop();

// you want element add at first postion
// myArr.unshift(9);
// you want element delete at first postion 
// myArr.shift();

// when you want check element are presenting the array result return a true or false in boolean data type
// console.log(myArr.includes(9));

// when you want kwon what position of element in array, return a position index or -1 
// console.log(myArr.indexOf(9));

// convert array into string data type with comma separated
/* const newArr= myArr.join();
console.log(newArr);
console.log(typeof newArr);
console.log( myArr); */


// slice, splice
const myArr =[0,1,2,3,4,5]

// #salice

/* console.log("A ",myArr);

const myn1=myArr.slice(1,3); // slice array includeing 1 index to excluding 3 rd out is element 1,2 it never slice origanal array 

console.log(myn1);
console.log(myArr); 

 */

// # Splice

console.log("A] orignal array  ",myArr);

const myn1=myArr.slice(1,3);

console.log(myn1);

console.log("B] origanal array after sclice : ",myArr);

const myn2=myArr.splice(1,3); // splice array includeing 1 index to last index 3 rd out is element 1,2,3 it  slice(manuplate) origanal array 


console.log(myn2);
console.log("C] origanal array after splice:",myArr);
