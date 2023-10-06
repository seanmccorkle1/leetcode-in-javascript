const memo =new Map()

var integerBreak = function(n) {

    // let memo = new Map()
    
    return dp(n)
}

    var dp = (n)=>{
        
        if(n == 1 || n == 2) return 1
        if(memo.has(n)) return memo.get(n)
        
        let q = 0
        for(let i=1; i<=n/2; i++){
            q = Math.max(q, i * Math.max((n-i),dp(n-i)))
        }
        memo.set(n, q)
        return q
    }

