// Immediately Invoked Function Expressions (IIFE)
/* 
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
Avoid polluting the global namespace
Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.
*/

/* first paramathes are function defination and sencond are function execution calls
()();
 */

// (function chai() {
    // name IIFE
//     console.log(`DB CONNECTED`);
// })();

/* ( const chaiaur = function(){
        console.log("chaiaur")
    }
)(); */

// (() => {
    // simple IIFE
//     console.log('DB connected TWO');
// }
// )();





( (name,age) => {
    console.log(`DB connected TWO ${name} and age is ${age}`);
})('hitesh',32);

((name,age) => {
    console.log(`DB connected TWO ${name} and age is ${age}`);
})('hitesh',32);

((name,age) => {
    console.log(`DB connected TWO ${name} and age is ${age}`);
})('hitesh',32);


let variables = (balance)=>{
console.log("normal arrow function Balance is ", balance);
}

variables(599);

let newvariable = ((bal)=>{
    console.log(" arrow function under IIFE blance is ",bal)
})(888);

let sampleFunction = function(rupe){
    console.log(`sample function ${rupe}`)
}
sampleFunction(657);

let sampleFunctionUnder =(function(amt){
    console.log(`sample function under IIFE ${amt}`);
})(123);