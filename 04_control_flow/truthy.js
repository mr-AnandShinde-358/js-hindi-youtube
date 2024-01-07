// const userEmail = "a@gmail.com";//true
// const userEmail = "";//false
const userEmail = [];//true

/* if(userEmail){
    console.log("Got user Email");
}else{
    console.log("Don't have user Email");
}
 */
/* 
falsy values
            :false,0,-0,BigInt 0n,"",null,undefined,NaN
truthly values
            :"0",'false'," ",[],{},function(){}
*/


/* if(userEmail.length===0){
    console.log("Array is empty");
} */

const emptyObj={}

// if(Object.keys(emptyObj).length==0){
//     console.log("Object is empty");
// }

/* false=="" //true

false==0 //true

0=='' //true
 */

// Nullish Coalescing Operator (??): null undefined

let val1;

// val1=5??10;
// val1=null ?? 5;
// val1=undefined ?? 15; // jab first value is undefined hogi aur second value is number hogi to 15 assing ho jayaga
// val1=null??10??15; // jo bhi first value mil gayi hai vahi assig ho jayagi val1 ko is case me 10
// val1=null??25??15; // is case me 25

// var1=undefined ?? 15;//variable name is var

// console.log(val1);


// **************** Terniary Operator *********

// condition?true:false
 
const iceTeaPrice=100

iceTeaPrice>=80 ? console.log("more than 80"):console.log("less than 80")