/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {
    
    let i = init
    
    let c = init
    // c = i = init
    
    increment = () => {
        return c+=1
    }
    
    decrement = () =>{
        return c-=1
    }
    
    reset = ()=> {        
        c = i
        return c
    }
    const functionObj= {increment, decrement, reset}
    return functionObj
}

const counter = createCounter(5)

counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4