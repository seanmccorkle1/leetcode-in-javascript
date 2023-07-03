var buddyStrings = function(A, B) {
    if (A.length != B.length) {
        return false;
    }
    
    if (A == B) {
        let s = new Set();
        
        for (let i = 0; i < A.length; i++) {
            s.add(A.charAt(i));
        }
        
        if (s.size < A.length){
            return true
        }
        return false
    }
    
    let diff = []
    
    for (let i = 0; i < A.length; i++) {
        if (A.charAt(i) != B.charAt(i)) {
            diff.push(i);
        }
    }
    
    return diff.length == 2 && A.charAt(diff[0]) == B.charAt(diff[1]) && A.charAt(diff[1]) == B.charAt(diff[0]);
};
