// Given a balanced parentheses string s, return the score of the string.

// The score of a balanced parentheses string is based on the following rule:

// "()" has score 1.
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.


//     Example 1:

// Input: s = "()"
// Output: 1
// Example 2:

// Input: s = "(())"
// Output: 2
// Example 3:

// Input: s = "()()"
// Output: 2

///////////////////////////////////////////////////////////////////////////////////

var scoreOfParentheses = function (s) {
    var score = 0;
    var depth = 0;
    for (i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            depth++;
        } else {
            depth--;
            if (s[i - 1] === "(") {
                score += Math.pow(2, depth);
            }
        }
    }
    return score;
}