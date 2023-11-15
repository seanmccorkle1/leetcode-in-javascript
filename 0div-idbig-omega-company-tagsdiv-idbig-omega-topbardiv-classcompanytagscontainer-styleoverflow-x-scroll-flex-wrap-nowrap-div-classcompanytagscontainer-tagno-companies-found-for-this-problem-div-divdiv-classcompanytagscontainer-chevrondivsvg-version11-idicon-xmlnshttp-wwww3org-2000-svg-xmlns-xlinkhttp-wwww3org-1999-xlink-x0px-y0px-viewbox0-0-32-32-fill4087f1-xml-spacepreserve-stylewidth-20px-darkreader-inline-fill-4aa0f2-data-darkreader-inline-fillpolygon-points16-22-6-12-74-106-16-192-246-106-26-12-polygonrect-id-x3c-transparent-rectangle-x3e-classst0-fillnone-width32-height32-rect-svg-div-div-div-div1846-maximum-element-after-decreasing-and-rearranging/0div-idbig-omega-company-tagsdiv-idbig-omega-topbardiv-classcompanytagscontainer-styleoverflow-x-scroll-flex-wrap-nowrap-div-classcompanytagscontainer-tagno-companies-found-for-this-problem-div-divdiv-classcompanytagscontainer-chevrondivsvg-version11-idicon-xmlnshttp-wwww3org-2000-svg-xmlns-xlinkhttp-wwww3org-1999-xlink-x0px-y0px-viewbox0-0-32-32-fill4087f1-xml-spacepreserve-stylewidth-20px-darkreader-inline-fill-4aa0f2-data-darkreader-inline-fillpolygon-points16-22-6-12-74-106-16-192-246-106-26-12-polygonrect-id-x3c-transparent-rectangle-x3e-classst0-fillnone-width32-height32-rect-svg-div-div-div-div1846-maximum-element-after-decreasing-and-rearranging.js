var maximumElementAfterDecrementingAndRearranging = function (array) {   
    array.sort((a,b)=> a - b)

    return array.reduce((acc, num) => (acc = Math.min(acc + 1, num)), 0)
}

