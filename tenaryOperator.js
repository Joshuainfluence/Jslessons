// tenary operator = shortcut for if/else statement
// takes 3 operand
// 1. a condition with ?
// 2. expression if True :
// 3. express if False

let adult = checkAge(21);
console.log(adult)
function checkAge(age){
    if (age >= 18) {
        return true;
    }else{
        return false;
    }
}

// we can rewrite this easily by using tenary operators
let teenager = teenage(21);
console.log(teenager);

function teenage(years){
    return years >= 18 ? true : false;
}
// image playing a game
winner(true)
function winner(win){
    win ? console.log("YOU WIN") : console.log("YOU LOOSE")
}

// tenary operator is a shortcut for if and else statement