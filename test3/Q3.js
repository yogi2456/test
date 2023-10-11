var x = 123;

function palindrome(x) {
    for( var i = 0; i < x.length; i++) {
        if (x[i] == x[x.length -1]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome(x))