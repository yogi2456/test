// create a program that prints the following pattern using astericks using for loops:
//input -5
//output -
//*
//**
//***
//****
//*****

// var input = 5;

// function printstars(number) {

//     for(i = 1; i <= number; i++) {
//         var pattern = ""
//         for (j = 1; j <= i; j++) {
//             pattern = pattern + "*"
//         }
//         console.log(pattern)
//     }
// }

// printstars(input)

// Palindrome Check
// Write a JavaScript function that checks if a given string is a palindrome (reads the same backward as forward). Return true if it's a palindrome; otherwise, return false.

// Example:

// Input: "racecar"
// Output: true

var array = ["r", "a", "c", "e", "c", "a", "r"];

function palindromecheck(array) {
    for (var i = 0; i < array.length; i++) {
        //console.log(array[i])
        if (array[i] % 2 == 0) {
            return true
        }
    }
}

palindromecheck(array)