var x = 123;

function palindrome(x) {
    for( var i = 0; i < x.length/2; i++) {
        if (x[i] == x[x.length -1]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome(x))