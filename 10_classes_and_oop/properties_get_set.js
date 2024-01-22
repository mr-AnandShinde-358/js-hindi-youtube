function User(email,password){
    this._email=email;
    this._password=password; 
    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            return this._email=value
        }
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase()
        },
        set:function(value){
            return this._password=value
        }
    })

    
}

let anand = new User("anand@gmail.com","abc")
console.log(anand.password)
console.log(anand.email)
// console.log(anand._email)