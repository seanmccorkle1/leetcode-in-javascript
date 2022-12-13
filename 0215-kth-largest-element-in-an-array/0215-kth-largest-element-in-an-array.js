var findKthLargest = function(array, kthLargest) {
    // xd
    return array.sort((a,b) => b - a)[kthLargest - 1]
}