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

// var array = [3, 5, 6, 67, 45, 3, 8, 6, 9, 2, 7, 1, 34, 23, 12];

// function findsmallestnumber(array) {
//     var minimum = array[0];
//     for (var i = 1; i < array.length; i++) {
//         if(minimum > array[i] ) {
//             minimum = array[i];
//         }
//     }
//     return minimum
// }

// console.log(findsmallestnumber(array))

// var array = [1, 2, 3, 4, 5, 6, 7, 56, 45, 34, 23, 65, 78, 12, 22, 33, 44, 55];

// function findlargestnumber(array) {
//     var maximum = array[i];
//     for (var i = 1; i < array.length - 1; i++) {
//         if(maximum < array[i]) {
//             maximum == array[i];
//         }
//         return maximum
//     }

// }

// console.log(findlargestnumber(array))


//write a javascript function that takes two arrays as input and
// returns a new array containing elements that are present in both arrays.

var array = [1, 3, 5, 67, 45, 87];
var array1 = [34, 23, 54, 3, 5, 22, 1];

function findtwoarrays(array, array1) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array1.length; i++) {
            //console.log(array, array1)
            //console.log(i,j)
            //console.log(array[i], array1[j])
            if (array[i] == array1[j]) {
                result.push(array[i])
            }
        }
    }
    return result
}

console.log(findtwoarrays(array, array1))



// var array = [1, 2, 3, 45, 65, 44, 22, 78, 56, 33, 89, 32];

// for (var i = 0; i < array.length; i++) {
//     if(array[i] % 2 == 0) {
//         console.log(array[i], "this is even number")
//     }
// }



var array1 = ["yogesh", "awdiz", "karan", "sagar"]
var array2 = ["yogesh", "sagar", "mahesh", "ram"]

for (var i = 0; i < array1.length; i++) {
    //console.log(array1[i])
    for (var j = 0; j < array2.length; j++) {
        //console.log(array2[i])
    }
} 



var array3 = ["yogesh", "awdiz", "karan", "sagar"]

array3.push("mahesh")
array3.push("ram")
array3.push("yuvraj")

console.log(array3)



var array = [56, 76, 43, 52, 2, 4, 8, 69, 9, 6, 3];

