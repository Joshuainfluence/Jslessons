// Template literals = delimited with (`)
// instead of double or single quotes

let username = "influence";
let item = "Toyota prius 2024";
let total = 40000


console.log(`Hello ${username}`);
console.log(`You have successfully purchased ${item}`)
console.log(`Your total is $${total}`);

// OR

let text = `
Hello ${username}
You have successfully purchased ${item}
Your total is ${total}
`;

console.log(text)

document.getElementById('myLabel').innerHTML = text;

// you can add toLocalString
// toLocaleString() = returns a string with a language sensitive representation of the number

let myNum = 123456.789;

myNumNgn = myNum.toLocaleString("en-NG", {style: "currency", currency: "NGN"})
myNumUS = myNum.toLocaleString("en-us", {style: "currency", currency: "USD"})
myNumCel = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"})
console.log(myNumNgn);
console.log(myNumUS);
console.log(myNumCel);