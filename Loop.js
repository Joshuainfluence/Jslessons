// while loop = repeat some code
//  while some condition is true potentially infinite


// the window.prompt will remain until the username is inserted
// let username = "";

// while(username == "" || username == null){
//     username = window.prompt("Enter your name");
// }

// console.log("Hello " + username + "🧑‍🎄");

// heading to do-while loops


// do while loop = do something
// then check the condition, repeat if the condition is true
// let username;

// do{
//     username = window.prompt("Enter your name");
// }while(username == "")

// console.log("Hello ", username);

// heading to for loops
// for loops = repeat some code a certain amount of time

// the counter is known as a local variable
// because it does exit outside the for loop
// for(let counter = 1; counter<=100; counter++){
//     console.log(counter)
// }
// let's try decrementing

// for(i = 10; i > 0; i--){
//     console.log(i);
    
// }
// console.log("HAPPY NEW YEAR!");
// you can count down by 2

// for(i = 10; i > 0; i-=2){
//     console.log(i);
    
// }
// console.log("HAPPY NEW YEAR!");

// while loop is used when you are repeat some code an infinite amount of times
// for loop are suitable for code you need to repeat at a given amount of time

// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

// for(let i = 1; i <= 20; i++){
//     if(i == 13){
//         continue;
//     }
//     console.log(i)
// }

// nested loop = a loop inside a loop
// for(let i = 1; i <= 3; i++){
//     for(let j = 1; j <= 3; j++){
//         console.log(j);
//     }
// }

// let's try use a nested loop to draw a triangle
// we will accept a user input
// the outer loop will b incharge of the rows
// the inner loop will b incharge of the column

let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt('Enter number of rows');
let columns = window.prompt("Enter number of column");

for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= columns; j++){
        document.getElementById("myRectangle").innerHTML += symbol
    }
    document.getElementById("myRectangle").innerHTML += "<br>"
}