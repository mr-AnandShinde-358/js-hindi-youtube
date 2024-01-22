// console.log(Math.PI)
// Math.PI=5
// console.log(Math.PI)


const descripter= Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter)
/* {
    value: 3.141592653589793,
    writable: false,
    enumerable: false,       
    configurable: false      
  } */

//   create object type
  const myNewObject = Object.create(null)

//   console.log(myNewObject)

  const chai = {
    name:'ginger chai',
    price:250,
    isAvailble:true,
    orderChai:function(){
        console.log("chai nahi bani")
    }
  }
//   console.log(chai)
// console.log(Object.getOwnPropertyDescriptor(chai)) //undefined
// console.log(Object.getOwnPropertyDescriptor(chai,"name")) // 
/* {
  value: 'ginger chai',
  writable: true,      
  enumerable: true,    
  configurable: true   
} */

Object.defineProperty(chai,"name",{
   // writable:false,
    enumerable:false  // you not enumerable (access/print) name properite in object loops
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))
// chai.name="anand"  // when writable is false do not do 
// console.log(chai.name)



for (let [key,value] of Object.entries(chai)) {
    if(typeof value!=='function'){
        console.log(`${key}:${value}`)
    }
}

// console.log( Object.entries(chai))  // type of - object (An array of the given object's own enumerable string-keyed property key-value pairs. Each key-value pair is an array with two elements: the first element is the property key (which is always a string), and the second element is the property value.)


// try do math.pi value change usning defineProperty

Object.defineProperty(Math,"PI",{
    writable:true, 
     enumerable:false  // you not enumerable (access/print) name properite in object loops
 })//Cannot redefine property: PI

// console.log( Object.getOwnPropertyDescriptor(Math,"PI"))
