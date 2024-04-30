/*
Write a function that takes an integer minutes and converts it to seconds.
Hint seconds = minutes * 60
convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120
*/

function convertMinutes(minutes) {
let seconds = minutes * 60
return seconds
}


console.log(convertMinutes(5))
console.log(convertMinutes(3))