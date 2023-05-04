var findMedianSortedArrays = function(nums1, nums2) {

    let totalLen = nums1.length + nums2.length
    
    let idx1 = 0
    let idx2 = 0
    
    let curr = undefined
    let last = undefined

    const half  =Math.floor(totalLen / 2)
    while (idx1 + idx2 <= totalLen/2) {
      
        if (typeof curr == "number") {
            last = curr
        }
      
      let elOne = nums1[idx1];
      let elTwo = nums2[idx2];
      
      if (elOne == undefined) {
          curr = elTwo;
          idx2++;
    } 
      
      else if (elTwo == undefined &&elOne != undefined) {
          curr = elOne;
          idx1++;
    } 
      
      else if (elOne < elTwo) {
          curr = elOne;
          idx1++;
    } 
      
      else {
      curr = elTwo      
          idx2++
      }
  }
    if ((totalLen % 2) == 0){
        return (curr + last) / 2
    }
    else if ((totalLen % 2) == 1) {
        return curr
    }
    // return totalLen % 2 === 0 ? (last + curr) / 2 : curr;
}