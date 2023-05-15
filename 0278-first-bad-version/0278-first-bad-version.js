function solution(isBadVersion) {

    return function (num) {

        // num isnt an index,
        // so use [1, num] as left and right bounds

        let leftBound = 1
        let rightBound = num

        while (leftBound < rightBound) {

            let midIndex = Math.floor((leftBound + rightBound) / 2)
            const midIsBad = isBadVersion(midIndex)

            if (midIsBad) {
                rightBound = midIndex
            }

            else if (!midIsBad) {
                leftBound = midIndex + 1
            }

        }

        return leftBound
    }

}

// Input: num = 5, "bad" = 4
// Output: 4

// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true

// 4 must be the first bad version.