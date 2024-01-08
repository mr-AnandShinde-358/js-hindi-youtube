// A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:

let index =0;
while (index<=10) {
    // console.log(`Value of index is ${index}`);
    index=index+2;
}

let myArray=['flash','batman','superman'];
let arr=0;
while (arr<myArray.length) {
    // console.log(`index of array${arr} and value is : ${myArray[arr]}`)
    arr++;
}

// The do...while statement repeats until a specified condition evaluates to false.
// statement is always executed once before the condition is checked.
let score =11;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score<=10);


const str="hellow anand"
// you can also itrable string using for loop and while loop and array
for (let st = 0; st < str.length; st++) {
    const element = str[st];
    console.log(element);
}