// const tinderUser={};
const tinderUser=new Object();

tinderUser.id="123abc";
tinderUser["name"]="Anand";
tinderUser.isLoggedin=false;
// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firsname:"hitesh",
            lastname:"choudhary",
        }
    }
}

// console.log(regularUser["fullname"]["userfullname"]["lastname"])
// console.log(regularUser.fullname.userfullname.lastname) 

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

// const obj3={obj1,obj2};
// const obj3={...obj1,...obj2}; //spread oparator also working

// const obj3=Object.assign(obj1,obj2); // its possible but not a best practices
// const obj3=Object.assign({},obj1,obj2);


// console.log(obj3);

const users=[
    {
        id:1,
        email:"anand@gmail.com"
    },
    {
        id:3,
        email:"sangam@gmail.com"
    },
    {
        id:2,
        email:"vijay@gmail.com"
    },

]

// console.log(users[1]["email"])
// console.log(users[1].id)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // collect all key of object and store it a array
// console.log(Object.values(tinderUser)); // collect all values of object and store it a array

// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
// console.log(Object.entries(tinderUser));

// check key is present in obj or not
// console.log(tinderUser.hasOwnProperty('isLoggedin'));


const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor

const {courseInstructor:instructor} =course

console.log(instructor);

/*
// destuctoring  react example

 // const navbar =(props.company)=>{
const navbar =({company})=>{

}

navbar(company="hitesh")
 */



/* 
// json format javascript object noteition
{
    "name":"hitesh",
   " cousername":"js in hindi",
    "price":"free"
}

[
    {

    },
    {

    },
    {

    }
]
*/


