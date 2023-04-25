// "function Array."" wont work

Array.prototype.last= function() {
    const array=this

    if (array.length == 0) {
        return -1
    } 
    
    return array.at(-1)
}

const a = [1, 2, 3]
a.last()