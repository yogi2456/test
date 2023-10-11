var lists = [[1, 4, 5], [1, 3, 4], [2, 6]];

function linked(lists) {
    for (var i = 0; i <= lists.length; i++) {
        result = [];
        if (lists[i] == 0) {
            result.push(lists[i])
        }
        return result;
    }
}

console.log(linked(lists))