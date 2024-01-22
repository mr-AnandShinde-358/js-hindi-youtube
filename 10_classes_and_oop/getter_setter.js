/* class User {
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    // you want to set getter then you need to set setter (jevho tumhal getter kiva setter set karaych asel tar getter and setter donhi use karav lagel)
    get password(){
        return this.password.toUpperCase()
    }
    // RangeError: Maximum call stack size exceeded 
    // need to create new varible _password because of constructor and setter not set value one variable at one time
    set password(value){
        this.password=value;
    }
} */
class User {
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
   
    get password(){
        // need to create new varible _password because of constructor and setter not set value one variable at one time
        return this._password.toUpperCase()
    }
 
    set password(value){
        this._password=value;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value
    }
}

const hitesh = new User("h@hitesh.ai","abc")

// console.log(hitesh.password)
console.log(hitesh.email)