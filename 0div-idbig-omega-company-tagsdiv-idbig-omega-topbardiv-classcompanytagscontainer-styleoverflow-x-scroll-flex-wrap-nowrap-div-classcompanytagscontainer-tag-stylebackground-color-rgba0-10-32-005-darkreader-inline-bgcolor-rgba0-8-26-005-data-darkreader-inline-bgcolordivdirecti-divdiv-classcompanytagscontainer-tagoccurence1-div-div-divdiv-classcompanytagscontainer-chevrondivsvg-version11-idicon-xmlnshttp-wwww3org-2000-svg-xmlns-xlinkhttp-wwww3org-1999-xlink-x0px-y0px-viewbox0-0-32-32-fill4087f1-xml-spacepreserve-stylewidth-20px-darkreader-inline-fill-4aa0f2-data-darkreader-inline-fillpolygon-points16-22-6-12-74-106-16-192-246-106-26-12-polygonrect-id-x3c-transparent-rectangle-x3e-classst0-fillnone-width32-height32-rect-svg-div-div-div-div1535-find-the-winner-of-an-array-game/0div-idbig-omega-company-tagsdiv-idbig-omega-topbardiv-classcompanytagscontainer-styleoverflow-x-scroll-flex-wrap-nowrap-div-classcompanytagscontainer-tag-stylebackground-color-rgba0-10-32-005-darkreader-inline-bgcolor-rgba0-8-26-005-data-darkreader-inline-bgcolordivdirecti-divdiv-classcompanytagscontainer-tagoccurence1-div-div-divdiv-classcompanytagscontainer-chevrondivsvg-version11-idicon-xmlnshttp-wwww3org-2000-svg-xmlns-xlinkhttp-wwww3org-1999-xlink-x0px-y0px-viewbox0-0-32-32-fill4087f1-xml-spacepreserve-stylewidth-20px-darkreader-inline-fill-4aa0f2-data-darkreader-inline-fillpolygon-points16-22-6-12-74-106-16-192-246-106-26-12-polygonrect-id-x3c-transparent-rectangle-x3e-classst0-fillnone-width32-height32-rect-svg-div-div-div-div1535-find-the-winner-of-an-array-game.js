var getWinner = function(A, k) {
    let cur = A[0];
    let win = 0;

    for (let i = 1; i < A.length; i++) {
        if (A[i] > cur) {
            cur = A[i];
            win = 1;
        } else {
            win++;
        }

        if (win === k) {
            break;
        }
    }

    return cur;
}
