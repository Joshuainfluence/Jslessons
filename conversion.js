// let age = window.prompt("How old are you? ");
// console.log(typeof age);
// age = Number(age);
// age += 1;
// console.log("Happy Birthday, you are " + age + " years old");
// console.log(typeof age)

// let x;
// let y;
// let z;

// x = Number("3.142")
// console.log(x, typeof x)
// y = String(33)
// console.log(y, typeof y)
// z = Boolean('')
// console.log(z, typeof z)


// to check the length of a string

let username = "influence";
console.log(username.length);

// the trim function to get rid of white spaces
let home = "     London";
home = home.trim();
console.log(home);
home = home.toUpperCase();  
console.log(home)
home = home.toLowerCase();
console.log(home)

let phoneNumber = "090-7768-5271";
phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber)

let fullName = "Joshua Onyeuku";
let firstname;
let lastname;

// firstname = fullName.slice(0, 6);
// lastname = fullName.slice(7);
firstname = fullName.slice(0, fullName.indexOf(" "))
lastname = fullName.slice(fullName.indexOf(" ") + 1)
console.log(firstname)
console.log(lastname)