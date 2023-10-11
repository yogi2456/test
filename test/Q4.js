//write a javascript function that takes two arrays as input and
// returns a new array containing elements that are present in both arrays.

// var array = [1, 3, 5, 67, 45, 87];
// var array1 = [34, 23, 54, 3, 5, 22, 1];

// function findtwoarrays(array, array1) {
//     var result = [];
//     for (var i = 0; i < array.length; i++) {
//         for (var j = 0; j < array1.length; i++) {
//             //console.log(array, array1)
//             //console.log(i,j)
//             //console.log(array[i], array1[j])
//             if (array[i] == array1[j]) {
//                 result.push(array[i])
//             }
//         }
//     }
//     return result
// }

// console.log(findtwoarrays(array, array1))

//write a javascript function that takes two arrays as input and
// returns a new array containing elements that are present in both arrays.

// var array = [1, 3, 5, 67, 45, 87];
// var array1 = [34, 23, 54, 3, 5, 22, 1];

// function findtwoarrays(array, array1) {
//     var result = [];
//     for (var i = 0; i < array.length; i++) {
//         for (var j = 0; j < array1.length; i++) {
//             //console.log(array, array1)
//             //console.log(i,j)
//             //console.log(array[i], array1[j])
//             if (array[i] == array1[j]) {
//                 result.push(array[i])
//             }
//         }
//     }
//     return result
// }

// console.log(findtwoarrays(array, array1))

//write a javascript function that takes two arrays as input and
// returns a new array containing elements that are present in both arrays.

// var array = [1, 3, 5, 67, 45, 87];
// var array1 = [34, 23, 54, 3, 5, 22, 1];

// function findtwoarrays(array, array1) {
//     var result = [];
//     for (var i = 0; i < array.length; i++) {
//         for (var j = 0; j < array1.length; i++) {
//             //console.log(array, array1)
//             //console.log(i,j)
//             //console.log(array[i], array1[j])
//             if (array[i] == array1[j]) {
//                 result.push(array[i])
//             }
//         }
//     }
//     return result
// }

// console.log(findtwoarrays(array, array1))

//write a javascript function that takes two arrays as input and
// returns a new array containing elements that are present in both arrays.

var array = [1, 3, 5, 67, 45, 87];
var array1 = [34, 23, 54, 3, 5, 22, 1];

function findtwoarrays(array, array1) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array1.length; j++) {
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