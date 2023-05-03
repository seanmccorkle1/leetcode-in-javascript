var findDifference = function(nums1, nums2) {
    
    const set = new Set(nums1)
    const set2 = new Set(nums2)

    nums1.forEach(num1Value => set2.delete(num1Value))    
    nums2.forEach(nums2Value => set.delete(nums2Value))
    
    const array = [...set]
    const array2 = [...set2]
    
    return [array, array2]
}