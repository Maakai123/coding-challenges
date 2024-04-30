/*
Write a function that checks if a number is even or odd.
*/

function oddEven(number) {
    if(number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

console.log(oddEven(4))
console.log(oddEven(5))