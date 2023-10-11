var nums = [3, 2, 4];

var target =6;

function integerNums (nums) {
    for( var i = 0; i <= nums.length -2; i++) {
        for( var j = 1; j <= nums.length -1; j++) {
            if(nums[i] + nums[j] == target) {
                console.log(i, j)
            }
        }
    }
}

console.log(integerNums(nums))