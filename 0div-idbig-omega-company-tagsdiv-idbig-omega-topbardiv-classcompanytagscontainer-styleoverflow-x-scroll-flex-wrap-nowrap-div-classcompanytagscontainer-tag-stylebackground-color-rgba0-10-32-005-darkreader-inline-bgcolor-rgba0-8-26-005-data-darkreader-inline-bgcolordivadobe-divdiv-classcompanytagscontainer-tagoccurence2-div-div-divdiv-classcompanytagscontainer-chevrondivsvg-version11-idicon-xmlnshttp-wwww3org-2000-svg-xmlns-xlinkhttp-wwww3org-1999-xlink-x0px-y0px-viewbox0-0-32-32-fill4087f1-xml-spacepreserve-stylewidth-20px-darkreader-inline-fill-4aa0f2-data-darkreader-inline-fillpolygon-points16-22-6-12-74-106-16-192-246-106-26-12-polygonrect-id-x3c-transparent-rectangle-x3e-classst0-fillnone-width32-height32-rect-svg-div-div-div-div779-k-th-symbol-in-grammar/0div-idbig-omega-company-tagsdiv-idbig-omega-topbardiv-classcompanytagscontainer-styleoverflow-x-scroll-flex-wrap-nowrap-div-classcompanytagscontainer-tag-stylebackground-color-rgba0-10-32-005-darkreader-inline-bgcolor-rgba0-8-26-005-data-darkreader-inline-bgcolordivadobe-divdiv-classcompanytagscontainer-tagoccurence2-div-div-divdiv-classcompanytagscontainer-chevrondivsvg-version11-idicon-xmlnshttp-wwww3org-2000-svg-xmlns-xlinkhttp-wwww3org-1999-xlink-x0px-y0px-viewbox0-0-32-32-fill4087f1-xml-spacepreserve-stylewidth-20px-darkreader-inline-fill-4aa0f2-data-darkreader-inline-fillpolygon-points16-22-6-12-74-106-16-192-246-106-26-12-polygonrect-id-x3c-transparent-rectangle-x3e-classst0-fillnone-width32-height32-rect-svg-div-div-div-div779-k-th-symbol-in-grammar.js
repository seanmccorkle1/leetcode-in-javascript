var kthGrammar = function(N, K) {

    // Base case
    if( N == 1){
        return 0
    }
    
    // even index of current level is 
    //the opposite of parent level's [(K+1)//2]
    if( K % 2 == 0 ){
        return 1 - kthGrammar( N-1, (K+1)>>1 )
    }
    
    else if (K % 2 ==1) {
        // odd index of current level is the same as parent level's [(K+1)//2]
        return kthGrammar( N-1, (K+1)>>1 );
    }
    
}

// [0]
// [01] 
// [01 10]
// return the 4th symbol in the 3rd row, 0 
kthGrammar(3, 4) // 0 
