/*
// scope 
{

}
 */

// var c=300;
let a=300;

{
let a=10;
const b=20;
var c=30;
// console.log("Inner ",a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="hitesh";

    function two(){
        const website="Youtube"
        console.log(username);
    }

    // console.log(website);
    two();
}

// one();


if(true){
    const username="hitesh";
    if(username=="hitesh"){
        const website=" youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);



/* 
// function with scope 
const name="Anand";

if(true){
    console.log(name);

}

function namePrint(){
    console.log(name);
}
namePrint();

*/


// +++++++++++++++++++++++interesting ++++++++++++++++++++++++++


/*
 function addOne(num){
    return  num+1;
}

console.log(addOne(3));


const addTwo = function(num){
    return num+2;
}

console.log(addTwo(5))
 */

// you Can access 'addOne' before initialization  
console.log(addOne(3));

function addOne(num){
    return  num+1;
}


//  Cannot access 'addTwo' before initialization
console.log(addTwo(5))

const addTwo = function(num){
    return num+2;
}

