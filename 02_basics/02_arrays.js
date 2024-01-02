const marvel_heros=["thor","Ironman","spiderman"];
const de_heros =["superman","flash","batman"];

// push return exiting array and add new array as a element
// marvel_heros.push(de_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// concat return new array and add two array 

// const allHero = marvel_heros.concat(de_heros);
// console.log(allHero);

// ... spered operator spered  all element of array

// const all_new_heros=[...marvel_heros,...de_heros];

// console.log(all_new_heros);

//  # when you want spread all element array use {flat }

// const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5,[5,8]]]];

// const real_another_array=another_array.flat(1);
// [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5, [ 5, 8 ] ] ]
// const real_another_array=another_array.flat(2);
[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5, [ 5, 8 ] ]
// const real_another_array=another_array.flat(3);
/* 
[
  1, 2, 3, 4, 5, 6,
  7, 6, 7, 4, 5, 5,
  8
] 
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);
*/

// Array.isArray - check given input is array or not
console.log(Array.isArray("Hitesh"));

// Array.from() - conver given input to array when it not posible to convert this time return a empty array
// console.log(Array.from("Hitesh")); // return array

// console.log(Array.from({a:"Hitesh"}));// return  empty array {} - interesting

// let score1=100;
// let score2=200;
// let score3=300;
 
console.log(Array.of(score1,score2,score3));

