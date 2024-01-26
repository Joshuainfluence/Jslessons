// console.log("I like peanut butter");
// console.log("It's really good");

// window.alert("I REALLY LIKE PEANUT BUTTER");

//this is a comment

/*
this is a multi-line comment

*/
// let firstname = "Joshua";
// let age;
// let school = "Delta State University Abraka";
// age = 17;

// age = age + 1;
// console.log(age);
// console.log(firstname);

// document.getElementById("p1").innerHTML = "Hello " +  firstname;
// document.getElementById("p2").innerHTML = "You are  " +  age + " years old";
// document.getElementById("p3").innerHTML = "Admitted to " +  school;

// let me = window.prompt("What's your name? ");
// console.log(me);

let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = username;
}



