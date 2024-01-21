class User {
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`)
    }
}


class Teacher extends User{
    constructor(username,email,password){
        // super()- keyword -  go to Teacher class and check extend classes first check User then go to user class and go to  constructor assing value of username with this keyword now you can use inheritance
        // The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor. 
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("Chai","chai@techer.com","123")
chai.addCourse();
chai.logMe();

const masalaChai = new User("masalaChai")
// masalaChai.addCourse(); //not ava
masalaChai.logMe();

// console.log(chai === masalaChai);  //false
// console.log(chai === Teacher);  //false

console.log(chai instanceof Teacher);//true
console.log(chai instanceof User);//true
console.log(masalaChai instanceof Teacher)//false