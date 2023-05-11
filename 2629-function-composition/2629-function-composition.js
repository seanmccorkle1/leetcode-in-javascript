
var compose = function(functions) {
    
    return (initNum) => functions.reduceRight((accumulator, currFunction)=> currFunction(accumulator), initNum)
    
}

const fn = compose([num=>num + 1, num => num*2])
fn(4)