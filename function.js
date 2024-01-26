// function to sing happy birthday


// let username = "Influence";
// let age = 17;
// function happyBirthday(){
//     console.log("Happy Birthday to You");
//     console.log("Happy Birthday to You");
//     console.log("Happy Birthday to " + username);
//     console.log("Happy Birthday to You");
//     console.log("You are "+ age + " years old");
// }
// happyBirthday();


// return statement
// return = returns a value back to the place where you invoked a function

let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);
console.log("The area of the object is ", area);

function getArea(width, height){
    result = Number(width * height);
    return result;
}


