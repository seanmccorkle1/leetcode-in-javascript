

var compose = function(functionArray) {
    
    return function (initNum) {
        return functionArray.reduceRight((accumulator, currFunction)=> currFunction(accumulator), initNum)
    }
}

const fn = compose([num=>num + 1, num => num*2])

console.log(fn(4),  9, "right-to-left")