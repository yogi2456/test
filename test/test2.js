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


var num = [2, 7, 11, 15]
var target = 9;

for (var i = 0; i < num.length; i++) {
    console.log(num[i])
    for (var j = 1; j < num.length; j++) {
        //console.log(i,j)
        //console.log(num[i], num[j])
        //console.log(num[i] + num[j] == target)
        //console.log(num[i] + num[j])
        if (num[i] + num[j] == target) {
            console.log(num[i], "+", num[j], "=", num[i] + num[j] )
        }
    }
}

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