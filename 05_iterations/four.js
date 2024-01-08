// The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows:
const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

/* for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
} */

// console.log(myObject["cpp"])

for (const key in myObject) {
//    console.log(key)
//    console.log(myObject[key])
    // console.log(`${key}  shortcut is for ${myObject[key]}`)
}

const programming=["js","rb","py","java","cpp"];

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

/*
// map not itarable 
const map = new Map();
map.set('IN','India')
map.set('USA','United Stated of America')
map.set('Fr','France')
map.set('IN','India')

for (const key in map) {
   console.log(key);
} */

/* 
array / map object var loop lavaych asel tar :- for of loop lavaych
object / var loop lavaych asel tar for in loop lavaych
*/