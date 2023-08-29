// write a javascript function that takes an array of strings 
//as input and returns a new array containing the lenghts of those strings.

// var strings = ["yogesh", "awdiz", "ram", "sagar", "govandi", "mahesh"];

// function stringsoflength(array) {
//     var result = [];
//     for (var i = 0; i < array.length; i++) {
//         //console.log(array[i].length)
//         result.push(array[i].length)
//     }
//     return result;
// }

// console.log(stringsoflength(strings))

// Q.2 write a javascript function that takes an array of numbers as
// input and returns a new array with only the even numbers from the original array.

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 45, 67, 33, 44, 68, 94, 22, 12, 46];

// function findevennumbers(numbers) {
//     var result = [];
//     for (var i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 == 0) {
//             //console.log(numbers[i])
//             result.push(numbers[i])
//         }
//     }
//     return result;
// }

// console.log(findevennumbers(numbers))

// Q.3 write a javascript function that takes an array of numbers as
// input and returns the smallest number from the array.

var array = [3, 5, 6, 67, 45, 3, 8, 6, 9, 2, 7, 1, 34, 23, 12];

function findsmallestnumber(array) {
    var minimum = array[0];
    for (var i = 1; i < array.length; i++) {
        if(minimum > array[i] ) {
            minimum = array[i];
        }
    }
    return minimum
}

console.log(findsmallestnumber(array))