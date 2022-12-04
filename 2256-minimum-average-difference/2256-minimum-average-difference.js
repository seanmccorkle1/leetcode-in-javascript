var minimumAverageDifference = function(nums) {
    let nL=nums.length;
    let leftSum = 0;
    let rightSum = nums.reduce((p,n)=>{return p+n},0);

    let minimum = Infinity;
    let ans = Infinity;
    for (let i=0; i<nL; i++){
        leftSum += nums[i];
        rightSum -= nums[i];
        let res = Math.abs(Math.floor(((leftSum)/(i+1))) - Math.floor(((rightSum)/Math.max(1,(nL-1-i)))));
        if(res < minimum){
            minimum = res;
            ans = i;
        }
    }
    return ans;
};
