var longestObstacleCourseAtEachPosition = function(obstacles) {
    var n = obstacles.length;
    var lis = [];
    var res = new Array(n).fill(0);
    for(var i = 0; i<n; i++)
    {
        if(lis.length != 0 && obstacles[i] >= lis.at(-1)) {
            lis.push(obstacles[i]);
            res[i] = lis.length;
        }
        
        else if (obstacles[i] < lis.at(-1) || lis.length == 0) {

            // find the upper bound
            var l = 0;
            var r = lis.length

            while(l<=r) {
                var mid = Math.floor((l+r)/2);
                
                if (lis[mid] <= obstacles[i]) {
                    l = mid+1
                }
                
                else if (lis[mid] > obstacles[i] || !lis[r] || !lis[l]) {
                    r = mid-1
                }
            }
            
            lis[l] = obstacles[i]
            res[i] = l+1
        }
    }
    return res;
}
