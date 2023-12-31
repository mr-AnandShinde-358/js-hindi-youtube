// ****************************Numbers****************************************
const score=400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2))

const otherNumber = 123.5554
// console.log(otherNumber.toPrecision(4))

const hundereds =100000000
// console.log(hundereds.toLocaleString());
// console.log(hundereds.toLocaleString('en-IN'));

let cal=50000*2000

// console.log(cal.toLocaleString('en-IN'));

// ********************************* Maths ******************************************************
// console.log(Math)
// Math.abs() (absolute value):- convert negative value to positive value
// console.log(Math.abs(-5))

// Math.rounds():- convert value integer accourding to ruond up 
// console.log(Math.round(4.3));
// console.log(Math.round(4.6));

// Math.ceil():- when we want choice a upper value

// console.log(Math.ceil(4.1));

// Math.floar():- when we want choice a lower value

// console.log(Math.floor(4.9));

// find a minmum value of array
// console.log(Math.min(6,4,84,2,4))

// find a maxmum value of array
// console.log(Math.max(6,4,84,2,4))

// math.random function
// console.log(Math.random()) //0 to 1

// we want to random number of range of 1 to 10

// console.log((Math.random()*10)+1) //1 to 10 // we want  out lick 1.1,2.3,4.56,5.77

// we want decimal out lick 1,2,4,5 use rap hole func math.floor

// console.log((Math.floor( Math.random()*10)+1)) //1 to 10


// when we want range value lick 10 to 20 min= 10 and max=20

// The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, 

const min=10;
const max =30;

console.log(Math.floor(Math.random()*(max-min+1))+min)





