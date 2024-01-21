// ES6

/* class User {

    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    // methods(functions)
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return  `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai","chai@gmail.com","123")

console.log(chai.encryptPassword());
// console.log(chai)
console.log(chai.changeUsername());
 */
// behind the scence
/* 
// function
function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPassword= function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return  `${this.username.toUpperCase()}`
}
const tea = new User("tea","tea@gmail.com","987")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

*/

user = {
    setInfo:function(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    },
    encryptPassword:function(){
        return `${this.password}abc`
    },
    changeUsername:function(){
        return  `${this.username.toUpperCase()}`
    }

}
user.setInfo("Sangam","sangam@gmail.com","123")
console.log(user.username)
console.log(user.email)
console.log(user.password)

console.log("****************************")

console.log(user.encryptPassword());
console.log(user.changeUsername());
