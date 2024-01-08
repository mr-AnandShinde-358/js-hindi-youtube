// for of loop
// The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on)

// ["","",""]
// [{},{},{}]

const arr =[1,2,3,4,5,6]

// object means - kis chig par loop laga hai 

for (const num of arr) {
    // console.log(num);
}

const greetings="Hello worlds!"
for (const greet of greetings) {
    if(greet==" "){
        // console.log("empty")
        continue;
    }
    // console.log(`Each char is ${greet}`);
}

/* const obj={
    name:"anand",
    age:21
} */

//objects is not iterable 
// but objects key iterable using Object.keys(object_name) it conver its a array then it iterable

/* for (const iterator of Object.keys(obj)) {
    console.log(iterator)
    
} */

// Map
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
// Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.

const map = new Map();
map.set('IN','India')
map.set('USA','United Stated of America')
map.set('Fr','France')
map.set('IN','India')

// console.log(map);

/* for (const key of map) {
    console.log(key);  

} */
/* for (const [key,value] of map) {
      console.log(key,':-',value);
} */

/* 
//  it not working with normal obj
const myObject={
    game1:'NFS',
    game2:'spiderman'
}

for (const [key,value] of myObject) {
    console.log(key,':-',value);
} */