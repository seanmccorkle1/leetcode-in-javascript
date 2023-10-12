var binarySearch = function(left, right, condition) {
    while (left < right) {
        var mid = left + Math.floor((right - left) / 2);
        
        if (condition(mid)) {
            right = mid;
        } 
        else {
            left = mid + 1;
        }
    }
    return left;
}

var findInMountainArray = function(target, mountainArr) {
    
    var n = mountainArr.length();
    var maxNumIdx = binarySearch(1, n - 2, function(idx) {
        return mountainArr.get(idx) > mountainArr.get(idx + 1);
    });
    
    var leftIdx = binarySearch(0, maxNumIdx, function(idx) {
        return mountainArr.get(idx) >= target;
    });
    
    if (mountainArr.get(leftIdx) === target) {
        return leftIdx;
    }
    
    var rightIdx = binarySearch(maxNumIdx, n - 1, function(idx) {
        return mountainArr.get(idx) <= target;
    })
    
    if (mountainArr.get(rightIdx) === target) {
        return rightIdx;
    }
    return -1;
}
