var SmallestInfiniteSet = function() {
    this.array=Array.from({length: 1000}, (u, index) => index+1)    
    this.array.unshift("cold")
}

SmallestInfiniteSet.prototype.popSmallest = function() {       
    
    const smallestNum = this.array.find(element => element != "cold")   

    // "pop" it
    this.array[smallestNum] = "cold"

    return smallestNum
}

SmallestInfiniteSet.prototype.addBack = function(numToAdd) {        
    this.array[numToAdd] = numToAdd
    return
}

const infiniteSetObj = new SmallestInfiniteSet()

infiniteSetObj.addBack(2);    // 2 is already in the set, so no change is made.
infiniteSetObj.popSmallest(); // return 1, since 1 is the smallest number, and remove it from the set.
infiniteSetObj.popSmallest(); // return 2, and remove it from the set.
