var SmallestInfiniteSet = function() {    
    // this.array = new Array(1001).fill(true)
    
    this.array=Array.from({length: 1001}, (u, index) => index)
    
    // this.array.unshift(false)
}

SmallestInfiniteSet.prototype.popSmallest = function() {

    // let indexOfMin = this.array.findIndex(element=> typeof element == "number")
    
    let smallest = this.array.find(num => num >= 1)
    
    // "pop" it
    this.array[smallest] = 0
    
    return smallest
}

SmallestInfiniteSet.prototype.addBack = function(numToAdd) {    
    
    if (this.array.at(numToAdd) == 0) {
        this.array[numToAdd] = numToAdd
    }
    
    
}


const infiniteSetObj = new SmallestInfiniteSet()

infiniteSetObj.addBack(2);    // 2 is already in the set, so no change is made.
infiniteSetObj.popSmallest(); // return 1, since 1 is the smallest number, and remove it from the set.
infiniteSetObj.popSmallest(); // return 2, and remove it from the set.
