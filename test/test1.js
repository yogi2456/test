// var array = [2, 3, 5, 4, 6, 7, 8, 45, 34, 78, 23];
// result = 0;

// function sumofallelements(array) {
//     for (var i = 0; i < array.length; i++) {
//         result = result + array[i]
//     }
//     return result;
// }
// console.log(sumofallelements(array))


// 5. write a function that counts the number of even numbers in an array.

var numbers = [2, 4, 6, 5, 3, 34, 23, 56, 76, 12, 90, 45, 32];

function evennumbercount(numbers) {

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evencount++
        }
    }
}

evennumbercount(numbers)


