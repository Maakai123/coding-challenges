/*
Create a function that takes the age in years and returns the age in days.

*/

function ageYears(year) {
    //number of days in year
    const daysPerYear = 365
    // Calculate the age in days by multiplying the years by the number of days in a year
    return year * daysPerYear

}

console.log(ageYears(65))