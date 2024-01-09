// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
// A function to execute for each element in the array. Its return value is added as a single element in the new array. The function is called with the following arguments:

const myNumers = [1,2,3,4,5,6,7,8,9,10]

// const newNums= myNumers.map((num)=>num+10)
// const newNums= myNumers.map((num)=>{return num+10})

// const newNums =myNumers.map((num)=>num*10).map((num)=>num+1)

// chaining function 

/* const newNums =myNumers
                        .map((num)=>num*10)  
                        .map((num)=>num+1) 
                        console.log(newNums); */
// fist time call map function multiple arrays item in 10 then result is 10,20,30,40,50,60,70,80,90,100
// second time call map function then pass map function is updated value it is 10,20,30... then return value is num +1 therefor 11,21,31,41... out is [11, 21, 31, 41,  51,61, 71, 81, 91, 100]


/* const arr=[];
myNumers.forEach((num)=>{
      arr.push(num+10) ;
})
console.log(arr); */

// console.log(newNums);


const newNums =myNumers
                        .map((num)=>num*10)  
                        .map((num)=>num+1)
                        .filter((num)=>num>=40) 
                        console.log(newNums);