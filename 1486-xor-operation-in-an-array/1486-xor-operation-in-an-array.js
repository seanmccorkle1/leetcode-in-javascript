var xorOperation = function(num, startNum) {

    const array = new Array(num)
    array[0]=startNum
    
    let sum =  startNum
    let index = 1
    
    while (index < num){
        let currNum = startNum + (index * 2)
        sum ^= currNum
        ++index
    }
    return sum
    
    for (let index = 1; index < array.length; index++) {
        array[index]  = startNum + (index * 2)
    }

    array
    return array.reduce((sum, curr) => sum ^ curr)
}

console.log(xorOperation(5, 0), 8, "[0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.")