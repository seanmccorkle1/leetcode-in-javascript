
var debounce = function(logFn, milliseconds) {
    
    let timeout
    
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(logFn, milliseconds, ...args)
    }
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */