// spr4ead operator is used to unpack an element
// it allows an iterabel such as an array, string to be expnaded in places where zero or more arguments are expected

// let numbers = [1,2,3,4,5,6]
// let maximum = Math.max(numbers)
// console.log(maximum)
// this code about will display return NAN 
// so we have to make use of the spread operator (...)


let numbers = [1,2,3,4,5,6]
let maximum = Math.max(...numbers)
console.log(maximum)


let class1 = ["Joshua", "Influence"]
let class2 = ["Onyeuku", "Kika"]

class1.push(...class2);
console.log(class1)