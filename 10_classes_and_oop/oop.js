const user = {
    username:"hitesh",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        // console.log("Got User Details from database")
        // console.log(`username:${this.username}`)
        console.log(this)
    }
}
// object litter / base units/ object
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


function UserFun(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    // console.log(this)
    this.greeting= function(){
        console.log(`Welcome ${this.username}`)
    }
    return this
}

//   const userOne = UserFun("hitesh",12,true)
//   const userTwo = UserFun("ChaiAurCode",11,false)
  const userOne = new UserFun("hitesh",12,true)
  const userTwo = new UserFun("ChaiAurCode",11,false)

  console.log(userOne.constructor);//constructor propertie:  reference hoti hai khud ka hi 
//   console.log(userTwo)
//   userTwo.greeting();
//   userOne.greeting();


  /* 
  new keyword
    1] jaise hi aap new keyworld use karoge to empty object create hota hai aur use instance kahate hai
    2] constructor function call hota hai new keyworld ke karan and apake argument ko pack karake apako de data hai
    3] this keywold hai jo bhi apane argument likhe hai usame inject ho jata hai
    4] apako mil jata hai funtion ke andhar
  */