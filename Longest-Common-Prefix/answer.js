// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

///////////////////////////////////////////////////////////////////////////////////////////////////

var longestCommonPrefix = function (strs) {
    var ans = [];

    strs[0].split("").forEach((letter) => {
        ans.push(letter)
    });

    strs.forEach((word) => {
        splitWord = word.split("");
        for (let i = 0; i < ans.length; i++) {
            if (splitWord[i] === ans[i]) {
                continue;
            } else {
                ans.splice(i, ans.length);
                continue;
            }
        }
    })

    return ans.join('');
};