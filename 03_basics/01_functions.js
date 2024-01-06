
// function defination
/* function sayMyName (){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
    
} */

// sayMyName // function refernce

// sayMyName(); // function executions 

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2); 
// }
function addTwoNumbers(number1,number2){
    // let result = number1+number2;
    // return result;

    return number1+number2;
}


let result = addTwoNumbers(8,9);

// console.log("result: ",result);

function LoginUserMeassage(username="sam"){
 /*    if(username===undefined){
        console.log("Please enter a username");
        return
    } */
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(LoginUserMeassage()); //  result is undefined
// console.log(LoginUserMeassage("ajay"));

// function with objects 

// object destuction lick react
/* function handleObject({username,price})
{
    console.log(`Username is ${username} and price is ${price}`)

}

// handleObject(user)
handleObject(
    {
        username:'Anand',
        price:529
    }
) */

//Rest parameters
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

// function calculateCartPrice(...num1){ // output:  [200,300,400,500,2000]
function calculateCartPrice(val1,val2,...num1){  // output:  [400,500,2000] and assing value val1=200,val2=300
    return num1;
}

// console.log(calculateCartPrice(200,300,400,500,2000));

/* const user = {
    username:"hitesh",
    prices:199
}

function handleObject(anyObjects)
{
    console.log(`Username is ${anyObjects.username} and price is ${anyObjects.price}`)

}

// handleObject(user)
handleObject(
    {
        username:'sam',
        price:399
    }
) */


const myNewArray =[200,400,100,600]


function returnSecondValue(getArray){
    return getArray[2];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([700,400,600,500,100]));



