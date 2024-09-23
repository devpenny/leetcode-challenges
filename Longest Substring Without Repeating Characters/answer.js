// Given a string s, find the length of the longest
// substring
//  without repeating characters.



//     Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/////////////////////////

var lengthOfLongestSubstring = function (s) {
    if (s.length < 2) return s.length
    let maxSubstring = s[0];
    let maxLength = 0;
    let left = 0;
    let right = 1;
    while (right < s.length) {
        if (maxSubstring.includes(s[right])) {
            const regex = new RegExp(`^.*?${s[right]}`)
            maxSubstring = maxSubstring.replace(regex, '')
        }
        maxSubstring = maxSubstring + s[right]
        right++;
        maxLength = Math.max(maxLength, maxSubstring.length)
    }
    return maxLength
};