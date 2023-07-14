var longestSubsequence = function(array, targetDifference) {

    const map = new Map()
    let max = 0

    for (const num of array) {

        const diff = num - targetDifference
        const len = (map.get(diff) ?? 0) + 1

        map.set(num, len)
        max = Math.max(len, max)
    }

    return max
}

console.log(longestSubsequence([1, 3, 5, 7], 2), 4)
// console.log(longestSubsequence([1,3,5,7], 33), 1)