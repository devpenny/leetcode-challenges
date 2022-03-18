// Given a string s, remove duplicate letters so that every letter appears once and only once.You must make sure your result is the smallest in lexicographical order among all possible results.



//     Example 1:

// Input: s = "bcabc"
// Output: "abc"
// Example 2:

// Input: s = "cbacdcbc"
// Output: "acdb"


// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.


var removeDuplicateLetters = function (s) {
    stack = [];
    for (i = 0; i < s.length; i++) {
        let letter = s[i];
        if (stack.includes(letter)) {
            continue;
        }
        while (letter < stack[stack.length - 1] && s.substring(i).includes(stack[stack.length - 1])) {
            stack.pop();
        }
        stack.push(letter);
    }
    return stack.join("")
};