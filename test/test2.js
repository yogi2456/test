// create a program that prints the following pattern using astericks using for loops:
//input -5
//output -
//*
//**
//***
//****
//*****
var input = 5;

function printstars(number) {

    for(i = 1; i <= number; i++) {
        var pattern = ""
        for (j = 1; j <= i; j++) {
            pattern = pattern + "*"
        }
        console.log(pattern)
    }
}

printstars(input)

// Palindrome Check
// Write a JavaScript function that checks if a given string is a palindrome (reads the same backward as forward). Return true if it's a palindrome; otherwise, return false.
// Example:
// Input: "racecar"
// Output: true

var string = "abcdcba";

function checkp(str) {
    if(str.length < 2) {
        return "str not valid"
    }
    for (var i = 0; i < str.length / 2; i++) {
        //console.log(array[i])
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}

console.log(checkp(string))

var string1 = "a";
var flag = false;

function palindromecheck(str1) {

    for (var i = 0; (i < str1.length / 2) && (str1.length > 1); i++) {
        if (str1[i] !== str1[str1.length - 1 - i]) {
            return false
        }
        flag = true
    }
    return flag
}

console.log(palindromecheck(string1))


