var x = 123;

function reverseOrder1(x) {
    var reversedNum = 0;

    for( var i = 0; i < x.length; i++) {
        if(x != 0) {
            reversedNum = reversedNum + x[i];
        }
        return reversedNum;
    }
}

console.log(reverseOrder1(x))