// "function Array."" wont work

Array.prototype.last= function() {
    
    if (this.length == 0) {
        return -1
    } 
    
    return this.at(-1)
}

const a = [1, 2, 3]
a.last()