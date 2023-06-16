function numOfWays(nums) {
  return dfs(nums) - BigInt(1);
  
  function dfs(arr) {
    if (arr.length <= 2) return BigInt(1);
    
    const left = arr.filter(n => n < arr[0]);
    const right = arr.filter(n => n > arr[0]);
    let res = BigInt(1);
    for (let i = left.length + 1; i <= left.length + right.length; i++) {
      res *= BigInt(i);
      res /= BigInt(i - left.length);
    }
    return res * dfs(left) * dfs(right) % BigInt(1000000007);
  }  
}
