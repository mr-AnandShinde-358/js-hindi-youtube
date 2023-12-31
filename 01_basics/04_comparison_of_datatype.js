// console.log(2>1)
// console.log(2>=1);
// console.log(2==1);
// console.log( 2!=1);

// do not do - comapare different datatype 

// console.log("2">0);
// console.log("02">0);

console.log(null>0);  // first step null convesion to 0 that's why 0>0 result is false
console.log(null==0); // == check equality and null value is empty  that's why  result is false
console.log(null>=0); //first conversion do null become a 0 and then check 0 is greater than and equal to zero (0>=0) tha's why result is true


/*

The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0. 
That's why (3) null >0 is true and (1) null >0 is false 
*/

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);
console.log(undefined>=0);
console.log(undefined<=0);

// avoid the above  types conversion
// === strick check 
