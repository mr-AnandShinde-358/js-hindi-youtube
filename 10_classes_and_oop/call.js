function SetUsername(username){
    // Complex DB Calles
    this.username= username
    console.log("calll")
}

function createUser(username,email,password){
    // SetUsername(username)
    SetUsername.call(this,username)// this passed to the call function then reference of createUser that why set username in createUser
    this.email=email
    this.password=password
}


const chai = new createUser("chai","chai@gmail.com","123")
console.log(chai)