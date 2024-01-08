// for loop
// A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loops value: ${i}`);
    // console.log(`Table NO: ${i}`);
    for (let j = 1; j <= 10; j++) {
      //  console.log(`Inner loops value: ${j} and inner loop ${i}`);
    //   console.log(i + '*' + j + '=' + i*j);
    }
}

let myArray=["flash","batman","superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue
// Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement.
// When you use continue without a label, it terminates the current iteration of the innermost enclosing while, do-while, or for statement and continues execution of the loop with the next iteration.

// for (let index = 0; index <=20; index++) {

//     if (index==5) {
//         console.log("dectected 5");
//         break;
//     }
//     console.log(`Value of i is ${index}` );
    
// }

for (let index = 0; index <=20; index++) {

    if (index==5) {
        console.log("dectected 5");
        continue;
    }
    console.log(`Value of i is ${index}` );
    
}
