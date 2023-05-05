var createHelloWorld = function() {
    return function hi(args) {
        return "Hello World"
    }
}

const f = createHelloWorld()
f(); // "Hello World"