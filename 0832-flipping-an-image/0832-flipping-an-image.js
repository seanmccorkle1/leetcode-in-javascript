var flipAndInvertImage = function(A) {
		for(let row in A) {
			A[row] = A[row].reverse();
			A[row] = A[row].map(x => x^1);
		}
	return A;
};