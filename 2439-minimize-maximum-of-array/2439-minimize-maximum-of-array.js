var minimizeArrayValue = function(nums) {
        let sum = 0, res = 0;
        for (let i = 0; i < nums.length; ++i) {
            sum += nums[i];
            res = Math.max(res, Math.floor((sum + i) / (i + 1)));
        }
        return res;
}
