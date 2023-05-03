var findDifference = function(nums1, nums2) {
    
    const set = new Set(nums1)
    
    nums2.forEach(nums2Value=>{set.delete(nums2Value)})
    
    const set2 = new Set(nums2)
    
    nums1.forEach(num1Value => set2.delete(num1Value))    
    
    const array = [...set]
    const array2 = [...set2]
    
    const final =[array, array2] 
    if (final.length == 2){
        return final
    }
    // return [array, array2]
    // [...set],[...set2]]
}