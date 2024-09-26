
// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t(including duplicates) is included in the window.If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.



//     Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
//     Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
//     Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

////////////////////////

var minWindow = function (s, t) {
    if (s.length < t.length) {
        return "";
    }

    const charCount = new Map();
    for (const ch of t) {
        charCount.set(ch, (charCount.get(ch) || 0) + 1);
    }

    let targetCharsRemaining = t.length;
    let minWindow = [0, Number.POSITIVE_INFINITY];
    let startIndex = 0;

    for (let endIndex = 0; endIndex < s.length; endIndex++) {
        const ch = s[endIndex];
        if (charCount.has(ch) && charCount.get(ch) > 0) {
            targetCharsRemaining--;
        }
        charCount.set(ch, (charCount.get(ch) || 0) - 1);

        if (targetCharsRemaining === 0) {
            while (true) {
                const charAtStart = s[startIndex];
                if (charCount.has(charAtStart) && charCount.get(charAtStart) === 0) {
                    break;
                }
                charCount.set(charAtStart, (charCount.get(charAtStart) || 0) + 1);
                startIndex++;
            }

            if (endIndex - startIndex < minWindow[1] - minWindow[0]) {
                minWindow = [startIndex, endIndex];
            }

            charCount.set(s[startIndex], (charCount.get(s[startIndex]) || 0) + 1);
            targetCharsRemaining++;
            startIndex++;
        }
    }

    return minWindow[1] >= s.length ? "" : s.slice(minWindow[0], minWindow[1] + 1);
};