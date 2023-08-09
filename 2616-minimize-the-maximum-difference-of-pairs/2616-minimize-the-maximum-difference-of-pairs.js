var minimizeMax = function(nums, p) {
    nums.sort((a,b)=>a-b);
    let l = -1, r = 1e9;
    while(l+1<r){
        let mid = Math.floor((l+r)/2);
        good(nums, p, mid) ? r = mid : l = mid;
    }
    return r;
}

const good = function (nums, p, maxDiff){
    
    let n = 0
    
    for(let i=1; i<nums.length; i++){
        if(nums[i]- nums[i-1] <= maxDiff){
            n++;
            i++;
        }
    }
    return n>=p ? true : n < p ? false : "end"
}