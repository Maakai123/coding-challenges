function sum( num) {
    //Calculate the sum of numbers from 1 to 10

    let sum = 0
    for (let index = 1; index <= num; index++) {
        
        sum +=index
    }   //sum = 0 + 1 = 1
        //sum = 1 + 2 = 3
        //sum = 3 + 3 = 6

   return sum
}
console.log(sum(3))