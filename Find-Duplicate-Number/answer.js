// 287. Find the Duplicate Number
// Medium

// 12672

// 1430

// Add to List

// Share
// Given an array of integers nums containing n + 1 integers where each integer is in the range[1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.



//     Example 1:

// Input: nums = [1, 3, 4, 2, 2]
// Output: 2
// Example 2:

// Input: nums = [3, 1, 3, 4, 2]
// Output: 3


// Constraints:

// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.
 

// Follow up:

// How can we prove that at least one duplicate number must exist in nums ?
//     Can you solve the problem in linear runtime complexity ?

///////////////////////////////////////////////////////////////////////////////////////////////////

// Approach 1 -> Time limit Exceeded

// var findDuplicate = function (nums) {
//     stack = [];
//     for (i = 0; i < nums.length; i++) {
//         if (stack.includes(nums[i])) {
//             return nums[i];
//         } else {
//             stack.push(nums[i]);
//         }
//     }
// };

var findDuplicate = function (nums) {
    var cur = 0;
    for (i = 0; i < nums.length; i++) {
        cur = Math.abs(nums[i])
        if (nums[cur] < 0) {
            return cur;
        } else {
            nums[cur] = - nums[cur]
        }
    }
};