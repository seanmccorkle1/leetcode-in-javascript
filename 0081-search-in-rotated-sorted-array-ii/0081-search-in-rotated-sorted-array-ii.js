var search = function(nums, target) {

    let start = 0
    let end = nums.length - 1
    
    while (start <= end) {

        let mid = start + Math.floor((end - start) / 2);

        if (target == nums[mid]) {
            return true;
        }
        
        if (nums[start] < nums[mid]) {
         
            if (nums[start] <= target && nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
            
        } 
        
        else if (nums[mid] < nums[start]) {
            if (nums[end] >= target && nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            start += 1;
        }
    }
    
    return false
}
