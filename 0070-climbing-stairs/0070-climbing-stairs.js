/**
 * 
 * @function
 * @return
 * 
 */


var climbStairs = function (num) {

    const array = new Array(num).fill(0)

    array[1] = 1
    array[2] = 2
    array[3] = 3

    array
    
    // climbStairs(2), return 2
    if (num <= 3) {
        return num
    }

    for (let index = 4; index <= num; index += 1) {
        let oneBefore=array[index - 1]
        let twoBefore=array[index - 2]
        array[index] = oneBefore+  twoBefore
    }
    
    // get the last number in the array
    return array[num]
}

console.log(climbStairs(4), 5, "5 ways to climb 4 steps, [[2, 2], [1,1,1,1], [2, 1, 1], [1, 2, 1], [1, 1, 2]")

// console.log(climbStairs(2), 2, "two ways, [2] and [1, 1]")