var numMusicPlaylists = function(N, L, K) {
    const MAGIC = 10 ** 9 + 7
    let f = new Array(L + 1).fill(0).map(a => new Array(N + 1).fill(0))
    f[0][0] = 1
    
    // f[i][j] represents the number of playlists that its length is i and it contains j different songs
    for(let i = 1; i <= L; i++) {
        for (let j = 1; j <= Math.min(i, N); j++) {
            // Add a new song to playlist
            f[i][j] += f[i - 1][j - 1] * (N - j + 1)
            // Add an existed song to playlist
            f[i][j] += f[i - 1][j] * Math.max(j - K, 0)
            f[i][j] = f[i][j] % MAGIC
        }
    }
    return f[L][N]
};
