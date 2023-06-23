var flipAndInvertImage = function(A) {
    
    for (let row in A) {
        A[row].reverse()
        A[row] = A[row].map(bit => bit ^ 1)
		}
    
    return A;
}