var countSubarrays = function(nums, minK, maxK) {
    let left=0,right,maxIndex_forMin=-1,maxIndex_forMax=-1,count=0;
    for(let right=0;right<nums.length;right++){
        if(nums[right]===minK){
            maxIndex_forMin = right;
        }
        if(nums[right]===maxK){
            maxIndex_forMax = right;
        }
        if(nums[right]<minK || nums[right]>maxK){
            left = right+1;
            maxIndex_forMin=-1;
            maxIndex_forMax=-1;
        }
        if(left<=right && maxIndex_forMin!==-1 && maxIndex_forMax!==-1){
            count += (Math.min(maxIndex_forMin,maxIndex_forMax)-left+1);    
        }
    }
    return count;
};
