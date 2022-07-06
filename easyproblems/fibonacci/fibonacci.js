function fib(number) {
    if (number <= 1) {
        return number // if its 0, return 0. if 1, return 1
    }
    const array = [0, 1]


    for (let index = 2; index <= number; index++) {
        array.push(array[index - 1] + array[index-2]) // 2 numbers *before* it
    }


    // fibonacci numbers use the 0 index
    array
    return array[number]
}
fib(2)
// console.log(fib(1), 1)
// console.log(fib(13), )
console.log(fib(3), )
// console.log(fib(43), )
