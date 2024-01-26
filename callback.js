//  callback = a functoin passed as an argumetn to another function 

document.write("hello world")

let x = Number(prompt("Enter value of x"));
let y = Number(prompt("Enter value of y"));

sum(x, y, displayDOM)

alert(x + y);

function sum(x, y, callback){
    let result = x + y;
    callback(result);
}

function displayDOM(output){
    document.getElementById("label").innerHTML = output;
}