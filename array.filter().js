// array.filter() = creates a new array with all elements that pass the test provided by a function 


let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge);

adults.forEach(print)
function checkAge(x){
    return x >= 18;
}

function print(x){
    console.log(x);
}


// console.log(1 + +"2" + "2");

// console.log( "A" - "B" + "2");

