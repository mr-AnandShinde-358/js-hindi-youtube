
// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value
// A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce().
const myNums =[1,2,3]

/* const myTotal =myNums.reduce(function (acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval
},0); */

// const myTotal = myNums.reduce((acc,currval)=> acc+currval,0)
// const myTotal = myNums.reduce((acc,currval)=>( acc+currval),0)

/* const myTotal = myNums.reduce((acc,currval)=>{
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval;
},0)

console.log(myTotal); */

const shoppingCart =[
    {
        itemName:"JS course",
        price:2999
    },
    {
        itemName:"Py Course",
        price:999
    },
    {
        itemName:"Mobile dev Course",
        price:5999
    },
    {
        itemName:"data scice course",
        price:12999
    }
]

// const totalAmout = shoppingCart.reduce((acc,item)=>(acc+item.price),0)

// console.log(totalAmout);

// implement using a forEach loop
// let totalAmout=0;
// shoppingCart.forEach((item)=>{
//     totalAmout=totalAmout+ item.price;
// })
// console.log(totalAmout);

// implement using map function
// let totalAmout=0;
// shoppingCart.map((item)=>(totalAmout=totalAmout+item.price))
// console.log(totalAmout);

