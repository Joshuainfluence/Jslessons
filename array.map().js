// array.map() = executes a provided callback function once for each array element adn creates a new array

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square)
let cubes = numbers.map(cube);

squares.forEach(print);
cubes.forEach(print)

function square(x){
    return Math.pow(x, 2);

}
function cube(x){
    return Math.pow(x, 3);
}
function print(x){
    console.log(x)
}

