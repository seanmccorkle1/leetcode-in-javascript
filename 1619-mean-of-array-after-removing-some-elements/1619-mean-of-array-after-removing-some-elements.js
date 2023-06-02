const trimMean =(array)=> {
    array.sort((a,b) => a - b)
    
    // array = array.slice(1, array.length-1)
    
    // 20 elements, remove 1 number from both ends
    // 40 elements, remove 2 numbers 
    
    let amountToDelete = array.length * .05
    let counter=0
    
    while (counter < amountToDelete){
        
        array.pop()
        array.shift()
        counter++
    }
    return array.reduce((sum,currNum)=>sum+currNum,0) /array.length
    
    let sum = array.reduce((sum,num) =>sum + num,0) / array.length
    console.log(sum)

    
    array = array.filter(num => num < topFiveAnchor)
    array = array.filter(num => num > bottomFiveAnchor)
    
    let newSum = array.reduce((sum,num) =>sum+num,0)
    return newSum / array.length
}

console.log(
    trimMean([6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]), 4)

// console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]), 2)