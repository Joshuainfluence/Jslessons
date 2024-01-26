let a
let b
let c

// a = window.prompt("Enter side a");
// a = Number(a);

// b = window.prompt("Enter side b");
// b = Number(b);

// c = Math.pow(a, 2) + Math.pow(b, 2);
// c = Math.sqrt(c);

// console.log("Side c " + c);

document.getElementById("submitButton").onclick = function () {
    a = document.getElementById("aTextbox").value;
    a = Number(a);

    b = document.getElementById("bTextbox").value;
    b = Number(b);

    c = Math.pow(a, 2) + Math.pow(b, 2);
    c = Math.sqrt(c);

    document.getElementById("clabel").innerHTML = "Side C: " + c;
}