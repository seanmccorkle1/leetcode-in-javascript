var createHelloWorld = function() {
    return hi = function(...args) {
        return "Hello World"
    }
}

const f = createHelloWorld()
f(); // "Hello World"