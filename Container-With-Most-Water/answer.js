// You are given an integer array height of length n.There are n vertical lines drawn such that the two endpoints of the ith line are(i, 0) and(i, height[i]).

// Find two lines that together with the x - axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.



//     Example 1:


// Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// Output: 49
// Explanation: The above vertical lines are represented by array[1, 8, 6, 2, 5, 4, 8, 3, 7].In this case, the max area of water(blue section) the container can contain is 49.
// Example 2:

// Input: height = [1, 1]
// Output: 1


// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var maxArea = function (height) {
    var end = height.length - 1;
    var start = 0;
    var distance = 0;
    while (end > start) {
        var diff = end - start;
        var lower = Math.min(height[end], height[start]);
        distance = Math.max(distance, diff * lower)
        if (lower === height[end]) {
            end--;
        } else {
            start++;
        }
    }
    return distance
};



///////////////////////


var maxArea = function (height) {
    let out = 0
    let left = 0
    let right = height.length - 1
    while (left < right) {
        let waterLevel = Number
        if (height[left] > height[right]) {
            waterLevel = height[right] * (right - left)
            right--;
        } else {
            waterLevel = height[left] * (right - left)
            left++;
        }
        out = Math.max(waterLevel, out);
    }
    return out
};