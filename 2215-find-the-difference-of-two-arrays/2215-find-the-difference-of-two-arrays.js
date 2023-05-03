var findDifference = function(nums1, nums2) {
    
    if (nums1.length == 0){
        return "x"
    }
    
    const set = new Set(nums1)
    
    nums2.forEach(nums2Value=>{set.delete(nums2Value)})
    
    const set2 = new Set(nums2)
    
    nums1.forEach(num1Value => set2.delete(num1Value))    
    
    let array = [...set]
    let array2 = [...set2]
    
    return [array, array2]
}