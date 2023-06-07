var minimumSum = function(num) {

    
    let array=num.toString().split("").sort((a,b)=> a - b)
    
    let num1= Number(array[0] + array[2])
    let num2 = Number(array[1] + array[3])
    
    return num1+num2
}

console.log(minimumSum(2932), 52)