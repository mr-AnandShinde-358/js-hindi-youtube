const coding =["js","ruby","java","python","cpp"];

// coding.forEach( function name(){}  )
// coding.forEach( function greet(){}  )

// it callback function that why we conot give function name 
/* coding.forEach( function (val){
    console.log(val);
}  ) */

// same as arrow funcion not give name 
// coding.forEach(const val =()=>{})

/* coding.forEach((item)=>{
    console.log(item);
}) */

/* function printMe(item){
    console.log(item);
}

coding.forEach(printMe); */

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })


const myCoding = [
    {
        languageName:"javascipt",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})