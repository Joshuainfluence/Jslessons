// array.forEach() = executes a provided callback function once for each array element

let students = ["spongebob", "patrick", "infuence"];
students.forEach(capitalize);
students.forEach(print)

function capitalize(x, y, z){
    z[y] = x[0].toUpperCase() + x.substring(1);

}

console.log(students[0]);

function print(x){
    console.log(x)
}