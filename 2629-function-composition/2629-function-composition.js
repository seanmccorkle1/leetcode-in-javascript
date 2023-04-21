


var compose = function(functions) {

    functions
    return argNum => functions.reduceRight((sum, currFunction)=> currFunction(sum), argNum)
}

const fn = compose([num=>num + 1, num => num*2])
fn(4)
