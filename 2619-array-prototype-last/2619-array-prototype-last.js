Array.prototype.last= function (p1) {

    if (this.length == 0) {
        return -1
    } 

    return this[this.length - 1]
}

const arr = [1, 2, 3]