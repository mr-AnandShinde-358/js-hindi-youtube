// Props = properties

class User {
    constructor(username){
        this.username= username
     
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
   static createId(){
        return '123'
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User{
    constructor(email,username){
        super(username)
        this.email=email
        // super(username)// Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    }
}


const iphone = new Teacher("iphone","i@phone.com")
// iphone.logMe()
// console.log(iphone.createId())
