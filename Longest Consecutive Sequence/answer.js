// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.



//     Example 1:

// Input: nums = [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is[1, 2, 3, 4].Therefore its length is 4.
// Example 2:

// Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
// Output: 9


/////////////////////////////////////

var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0
    const sortedNums = nums.sort((a, b) => a - b)
    const output = { 1: 1 }
    let sequence = 1
    for (i = 1; i < sortedNums.length; i++) {
        if (sortedNums[i] === sortedNums[i - 1] + 1) {
            output[sequence]++;
        } else if (sortedNums[i] === sortedNums[i - 1]) {
            continue;
        } else {
            sequence++;
            output[sequence] = 1;
        }
    }
    return Object.values(output).sort((a, b) => b - a)[0]
};s
