// Print the odd numbers less than 100
function oddNumbers(num) {
 //get odd numbers first num%2 and remainders
 //less than 100, 1-99
//Method 1

//for (let index = 0; index < num; index += 2 ) {
  //  console.log(index) 
    
//}

if( num % 2 !== 0 && num < 100) {
    return `${num} is an odd number `
} else if ( num > 100) {
    return `${num} is greater than 100`
} else{
    return `${num} is not an odd number`
}
 
}


console.log(oddNumbers(10))