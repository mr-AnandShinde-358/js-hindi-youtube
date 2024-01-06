const user ={
    username:"hitesh",
    price:999,

    welcomeMessage:function (){
        // console.log(` ${this.username} welcome to our website`);
        // this is refere now current object
        console.log(this);
    }
    
}
// user.welcomeMessage();
// user.username="Ajay"
// user.welcomeMessage();


// this is refere now empty object
// console.log(this);

// wen (this) call a browser then is refer a windows object 



/* function chai (){
    // you cannot use this under a functions
    
    let username="hitesh";
    
    // console.log(this.username);
     // console.log(this); //it return object with  multiple fuction setTimout setINterval cleartime and many
}

chai();

 */

/*   // you cannot use this under a functions
const chai = function(){
    let username="hitesh";
    
    console.log(this.username);
    // console.log(this); //it return object with  multiple fuction setTimout setINterval cleartime and many
}

chai()
 */

// ++++++++++++++++++ arrow function +++++++++++++

const chai = ()=>{
    let username="hitesh";
    
    // console.log(this.username);
    console.log(this); // return {} empty object
}

// chai();

/*
 // basic syntax arrow function
  ()=>{

  }

//  you can hold arrow function in variable

const add = ()=>{

}
 */

// defined arraow in multiple types 

/* const addTwo = (num1,num2)=>{
    return num1+num2;
}

console.log(addTwo(3,4)); */

// implecite return  arrow function :

// do not need write a return keyword 

// const addTwo =(num1,num2)=>num1+num2;

// const addTwo =(num1,num2)=>num1+num2;
