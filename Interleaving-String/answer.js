// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

// An interleaving of two strings s and t is a configuration where they are divided into non - empty substrings such that:

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
//     | n - m | <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.



//     Example 1:


// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// Output: true
// Example 2:

// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// Output: false
// Example 3:

// Input: s1 = "", s2 = "", s3 = ""
// Output: true


// Constraints:

// 0 <= s1.length, s2.length <= 100
// 0 <= s3.length <= 200
// s1, s2, and s3 consist of lowercase English letters.

/////////////////////////////////////////////

function isInterleave(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }

    const N1 = s1.length;
    const N2 = s2.length;
    const DP = [...Array(N1 + 1)].map(r => Array(N2 + 1).fill(false));

    for (let r = 0; r <= N1; r++) {
        for (let c = 0; c <= N2; c++) {
            if (r === 0 && c === 0) {
                DP[r][c] = true;
            } else if (r === 0) {
                DP[r][c] = DP[r][c - 1] && s2[c - 1] === s3[r + c - 1];
            } else if (c === 0) {
                DP[r][c] = DP[r - 1][c] && s1[r - 1] === s3[r + c - 1];
            } else {
                DP[r][c] = (DP[r][c - 1] && s3[r + c - 1] === s2[c - 1]) || (DP[r - 1][c] && s3[r + c - 1] === s1[r - 1]);
            }
        }
    }

    return DP[N1][N2];
}