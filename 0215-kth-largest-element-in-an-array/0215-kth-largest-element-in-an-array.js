var findKthLargest = (array, kthLargest) => {
    array.sort((a,b) => b - a)
    return array[kthLargest - 1]
}