// You are given a string s and an integer k.You can choose any character of the string and change it to any other uppercase English character.You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.



//     Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
//     Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

////////////////////////

var characterReplacement = function (s, k) {
    let ans = 0;
    let n = s.length;
    for (let c = 65; c <= 90; c++) { // ASCII values for 'A' to 'Z'
        let i = 0, j = 0, replaced = 0;
        while (j < n) {
            if (s[j] === String.fromCharCode(c)) {
                j++;
            } else if (replaced < k) {
                j++;
                replaced++;
            } else if (s[i] === String.fromCharCode(c)) {
                i++;
            } else {
                i++;
                replaced--;
            }
            ans = Math.max(ans, j - i);
        }
    }
    return ans;
};