// if
/* 
if(conditon){

}

if(true){
//  executed code
}

if(false){
    // not executed code
}
 */

/* 
// comparison  operators 

<  'lessthan'
>  'gretherthan'
<= 'lessthanEqualToo
>= greterThanEqualTwo
== equalTo
! NOT
!= NotEquaulTo
=== equal to and check datatype is equal or not
!== first is check equal or not if is equal then check datatype are equal or not if is Not equal  result is True and data type are equal then result is false 
 */

// if(2=='2'){
//     console.log("Executed");
// }
/* if(2 !=='2'){
    console.log("Executed");
}
 */
const isUserLoggedIn = true;
const temperature = 41;

/* if(temperature === 41){
    console.log("Temperature is less than 50");
}else{
    console.log("temperature is greater than 50");
} */

/* const score=200;

if(score>100){
    const power = "fly"
    console.log(`User power: ${power}`);
}
else{
    // power is not defined you can't access power becauze of scope 
    // console.log(`user power: ${power}`);
}
 */
// console.log(`user power: ${power}`);

// const balance =1000;

// // if(balance>500) console.log("test1"); // do this for short code lick one line
// // if(balance>500) console.log("test1"),console.log("test2"); // do not do this low readibality issue

// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if (balance<900){
//     console.log("less than 900")
// }else if(balance<1000){
//     console.log("less than 1000")
// }
// else {
//     console.log("less than 1200")
// }


const userLoggedIn = true;
const debitCard = true;
const googleLoggedIn = false;
const emailLoggedIn = true;

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if(googleLoggedIn||emailLoggedIn){
    console.log("user LoggedIn");
}