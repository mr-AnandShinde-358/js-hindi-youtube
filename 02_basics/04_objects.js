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
console.log(regularUser.fullname.userfullname.lastname) 