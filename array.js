let fruits = ["apple", "banana", "coconunt"];
fruits.push("Ornage") //adds an elemnet
fruits.pop(); //removes last element
fruits.unshift("mango") //add element to the beginning
fruits.shift() //removes the first element
let length = fruits.length //checks the number of arrays
console.log(length);


// Looping through an array

let prices = [3, 5, 2, 9, 4, 10];

for (let i = 0; i < prices.length; i++) {
    const element = prices[i];
    console.log(prices[i])

}

// or

for (let price of prices) {
    console.log(price)
}

// loop elements backward

for (let i = prices.length - 1; i >= 0; i--) {
    const element = prices[i];
    console.log(prices[i])
}
// we can store the arrays in another array


// 2D arrays = An array of arrays

let beverages = ["Milk", "Chocolate", "Sugar"];
let vegetables = ["Onions", "Carrot", "Pumpkin"]
let meats = ["Chicken", "Beef", "Pork"]


let groceries = [beverages, vegetables, meats]

for (const items of groceries) {
    for (const food of items) {
        console.log(food)
    }
}
console.log(groceries[0][2])

console.log(null==undefined)