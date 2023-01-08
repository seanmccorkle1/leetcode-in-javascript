/**
 * 
 * @function
 * @return
 * 
 */


var climbStairs = function (num) {

    // const array = new Array(num).fill(0)
    const array=[]
    
    // 0 ways to climb 0 stairs
    
    array[1] = 1
    array[2] = 2
    array[3] = 3

    array
    
    // array = [0, 1, 2, 3]
    
    // climbStairs(2), return 2
    if (num <= 3) {
        return num
    }

    for (let index = 4; index <= num; index += 1) {
        let oneBefore=array[index - 1]
        let twoBefore=array[index - 2]
        array[index] = oneBefore +  twoBefore
    }
    
    // last number is the number of ways to climb stairs    
    
    let numWaysToClimbStairs = array.at(-1)
    return numWaysToClimbStairs
}

console.log(climbStairs(4), 5, "5 ways to climb 4 steps, [[2, 2], [1,1,1,1], [2, 1, 1], [1, 2, 1], [1, 1, 2]")

// console.log(climbStairs(2), 2, "two ways, [2] and [1, 1]")