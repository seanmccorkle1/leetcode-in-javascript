var createHelloWorld =p=>() => "hello world".split(" ").map(word => word[0].toUpperCase() +word.slice(1)).join(" ")

const f = createHelloWorld()
f(); // "Hello World"