/*Function removeFirstThree(arr):
Create a new array by slicing the input array from index 3 to the end
Return the new array
*/

function removeFirstThree(arr) {
    return arr.slice(3) 


}



//return arr.slice(1,4)  start from index 1-> 4  [2,3,4]

console.log(removeFirstThree([1, 2, 3, 4, 5])); // Output: [4, 5]
console.log(removeFirstThree([10, 20, 30, 40, 50, 60])); // Output: [40, 50, 60]
console.log(removeFirstThree([7, 9, 8, 6, 5]));


//if element in  array is less 3

function removeFirst3(arr) {
    if(arr.length < 3) {
        return []
    } else {
        return  arr.slice(3) 
    }
    
}

console.log(removeFirst3([1, 2, 3, 4, 5]));