function multipleBy5(num){
    // this.num=num;
    return num*5
}

multipleBy5.power=6


console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)


function createUser(username,score){
    this.username=username;
    this.score=score;
   this.display=function(){
        console.log(`Price is ${this.score}`)
    }
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe=function(){
    console.log(`Price is ${this.score}`);
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",250)
/*
# do not create object lick this
 const chai =  createUser("chai",25)
const tea =  createUser("tea",250)
 */
// this === jis
chai.printMe();
chai.increment();
chai.display();


/* NOTE new keyword

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new javascript object.

A  prototype  is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to  properties and methods defined on the constructor's prototype.

The Constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.if no explicit return value is specified from the constructor, javaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called. if it doesn't return a non-primitive value (Object , array , function etc).the newly created object is returned.
*/