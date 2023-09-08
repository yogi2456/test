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

var string = "abcdcba";

function palindromecheck(str) {
    for (var i = 0; i < str.length / 2; i++) {
        //console.log(array[i])
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}

console.log(palindromecheck(str))