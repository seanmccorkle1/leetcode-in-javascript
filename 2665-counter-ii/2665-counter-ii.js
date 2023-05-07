var createCounter = function(init) {
    
    let c = init
    let i = init
    
    increment = () => {return c+=1}
    decrement = () =>c-=1
    
    function reset() {        
        c = i
        return c
    }
    
    const functionObj= {reset,increment, decrement}
    return functionObj
}

const counter = createCounter(5)

counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4