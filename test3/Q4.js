var s = "aa";
var p = "a"

function strings(s,p) {
    for( var i = 0; i <= s.length; i++) {
        for( var j = 0; j <= p.length; j++) {
            if(s[i] != s[j]) {
                return true;
            }
        }
        return false;
    }
}

console.log(strings(s,p))