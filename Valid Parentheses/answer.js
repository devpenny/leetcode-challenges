// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


//     Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

/////////////////////

// "brute" force O(n²)

var isValid = function (s) {
    const regex = /{}|\[\]|\(\)/g
    while (regex.test(s)) {
        s = s.replace(regex, "")
    }
    return s.length === 0
};

// STACK O(n)

var isValid = function (s) {
    const open = ['(', '[', '{']
    const close = [')', ']', '}']
    const stack = []
    for (i = 0; i < s.length; i++) {
        if (close.includes(s[i])) {
            if (stack[stack.length - 1] !== open[close.indexOf(s[i])]) return false
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.length === 0
};