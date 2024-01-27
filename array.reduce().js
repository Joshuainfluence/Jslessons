// array.reduce() = redueces an array to a signle value

let prices = [5, 10, 15, 20, 25, 30];

let total = prices.reduce(checkOut)

console.log(`The total price is: $${total}`)

function checkOut(total, element){
    return total+ element;
}