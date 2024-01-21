/* let myName = "hitesh     "

console.log(myName.truelength)
 */

let myHeros =["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}


let anand ="I am anand"
// Obeject.create  // factory functions means by defualt function 
// myHeros.hitesh(); // not work before object.prototype.hitesh function is defined 
Object.prototype.hitesh = function (){
    console.log(`hitesh is present in all objects`)
}
Array.prototype.heyHitesh = function(){
    console.log('Hitesh says hello');
}
// heroPower.hitesh();

// myHeros.hitesh();

// console.log(anand)
// anand.hitesh();


// myHeros.heyHitesh();
// heroPower.heyHitesh(); //heroPower.heyHitesh is not a functi


// inheritance

const user={
    name:"chai",
    email:"chai@google.com"
}

const Teacher ={
    mekeVideo:true
}

const TechingSupport={
    isAvailble:false
}

const TASupport  = {
    mekeAssigment:'js assigment',
    fullTime:true,
    __proto__:TechingSupport
}

Teacher.__proto__=user

// console.log(Teacher.name,Teacher.email)
// console.log(TASupport.isAvailble)

// modern Syntax inheritance

Object.setPrototypeOf(TechingSupport,Teacher)

// console.log(TechingSupport.mekeVideo)


let anotherUsername="ChaiAurCode      ";

String.prototype.trueLength=function(){
    console.log(`${this}`)
    // console.log(`${this.name}`) //undefined -it access avaible old time now not avaible this.name
    console.log(`True length is: ${this.trim().length}`)
    
}

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();