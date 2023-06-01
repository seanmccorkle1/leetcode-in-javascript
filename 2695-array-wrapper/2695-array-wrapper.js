var ArrayWrapper = function(nums) {
    this.array = nums
}

// when obj1 is used as a NUMBER, it takes this form (the sum of the elements)

ArrayWrapper.prototype.valueOf = function() {
    let objAsSum = this.array.reduce((sum, num) => sum + num, 0)
    return objAsSum 
}

ArrayWrapper.prototype.toString = function() {
    let stringWithCommas= this.array.join(",")
    return `[${stringWithCommas}]`
}

const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);

obj1 + obj2   // 10
String(obj1)   // "[1,2]"
String(obj2)   // "[3,4]"