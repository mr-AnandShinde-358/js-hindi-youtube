/* const coding =["js","ruby","java","python","cpp"];

const values = coding.forEach((item)=>{
    // console.log(item);
    return item;
})

console.log(values); */

const myNums =[1,2,3,4,5,6,7,8,9,10]

/*
// this not working with filter this working with map or forEach 
const val = myNums.filter((num)=>num+10)
console.log(val) 
*/;


// const newNums = myNums.filter((num)=>num>4)

// when you can ()=>() this not need return keyword
// const newNums = myNums.filter((num)=>(
//    num>4
// ))

//  when you can ()=>{} this  need return keyword
// const newNums = myNums.filter((num)=>{
//  return  num>4
// })

// console.log(newNums);

/* // above operation doing using forEach loop

const newNums=[]

myNums.forEach((num)=>{
    if (num>4) {
        newNums.push(num);
    }
})
console.log(newNums);
 */
 

const books =[
    {title:'Book One',genre:'Fiction',publish:1981,edition:2004},
    {title:'Book Two',genre:'Non-Fiction',publish:1992,edition:2008},
    {title:'Book Three',genre:'History',publish:1999,edition:2007},
    {title:'Book Four',genre:'NO-Fiction',publish:1989,edition:2010},
    {title:'Book Five',genre:'Science',publish:2009,edition:2014},
    {title:'Book Six',genre:'Fiction',publish:1987,edition:2010},
    {title:'Book Seven',genre:'History',publish:1986,edition:1996},
    {title:'Book Eight',genre:'Science',publish:2011,edition:2011},
    {title:'Book Nine',genre:'Non-Fiction',publish:1981,edition:1989},
]

// console.log(books);

// const newBooks = books.filter((bk)=>bk.genre=='History')
// const newBooks = books.filter((bk)=>bk.edition==2010)
// const newBooks=books.filter((bk)=>bk.edition>2000)
// const newBooks=books.filter((bk)=>bk.publish>=1995)
// const newBooks=books.filter((bk)=>bk.publish>=1995 && bk.genre=='History')
// console.log(newBooks);

// above operation doing using forEach loop 
/* const newBooks=[]
const newOneBooks=[]
books.forEach((bk)=>{
    if(bk.genre=='History'){
        newBooks.push(bk);
    }
    if(bk.edition==2010){
        newOneBooks.push(bk);
    }
})
console.log(newBooks);

console.log(newOneBooks); */

