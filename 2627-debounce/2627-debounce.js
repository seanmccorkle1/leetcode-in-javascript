
var debounce = function(logFn, milliseconds) {
    
    let timeout = null    
    return (...args) => {
        
        if (timeout!= null) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(logFn, milliseconds, ...args)
    }
}

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms
