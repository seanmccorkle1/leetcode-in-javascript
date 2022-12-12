
var climbStairs = function(num) {
    let array=new Array(num+1).fill(0)
    array[1]=  1
    array[2]=2
    array[3] = 3

    if (num <= 3){
        return num
    }
    
    for (let index=4; index <= num; index += 1){
        array[index] =array[index-1]  + array[index-2]
    }

    // get the last number in the array
    return array[num]
}

console.log(climbStairs(4), 5, "5 ways to climb 4 steps, [[2, 2], [1,1,1,1], [2, 1, 1], [1, 2, 1], [1, 1, 2]")
// console.log(climbStairs(2), 2, "two ways, [2] and [1, 1]")