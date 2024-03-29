var climbStairs = function (num) {

    const array = []
    
    // base cases
    array[1] = 1
    array[2] = 2
    array[3] = 3
    
    if (num <=3){
        return num
    }

    // 0 ways to climb 0 stairs
    array

    for (let index = 4; index <= num; index++) {

        let oneBefore = array[index - 1]
        let twoBefore = array[index - 2]

        array[index] = oneBefore + twoBefore
        array
    }

    // last number is the number of ways to climb stairs
    
    array
    return array.at(-1)
}


// console.log(climbStairs(4), 5, "5 ways to climb 4 steps, [[2, 2], [1,1,1,1], [2, 1, 1], [1, 2, 1], [1, 1, 2]")

console.log(climbStairs(8), 34)

// console.log(climbStairs(2), 2, "two ways, [2] and [1, 1]")
// console.log(climbStairs(3), 3, "[2, 1] [1, 2] [1, 1, 1]")