
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
console.log(LoginUserMeassage("ajay")); 
