// You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to make one square. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.

// Return true if you can make this square and false otherwise.

 

// Example 1:


// Input: matchsticks = [1,1,2,2,2]
// Output: true
// Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
// Example 2:

// Input: matchsticks = [3,3,3,3,4]
// Output: false
// Explanation: You cannot find a way to form a square with all the matchsticks.
 

// Constraints:

// 1 <= matchsticks.length <= 15
// 1 <= matchsticks[i] <= 108

//////////////////////////////////////////////////////////////

var makesquare = function (nums) {
    if (!nums || nums.length < 4) return false;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if (sum === 0 || sum % 4 !== 0) return false;
    let sideLength = sum / 4;

    let allScheme = [];
    backtrack(nums, 0, sideLength, allScheme, [], 0);
    if (allScheme.length < 4) return false;

    let used = new Array(nums.length).fill(false);
    return DFS(allScheme, used, 0, 0);
};


function backtrack(nums, length, target, allScheme, now, start) {
    if (length >= target) {
        if (length === target) {
            allScheme.push(now.slice());
        }
        return;
    }
    for (let i = start; i < nums.length; i++) {
        now.push(i);
        backtrack(nums, length + nums[i], target, allScheme, now, i + 1);
        now.pop();
    }
}


function DFS(allScheme, used, start, satisfied) {
    if (satisfied >= 4) return true;
    for (let i = start; i < allScheme.length; i++) {
        let pass = true;
        for (let j = 0; j < allScheme[i].length; j++) {
            let idx = allScheme[i][j];
            if (used[idx]) {
                pass = false;
                break;
            }
        }
        if (pass) {
            let tempUsed = used.slice();
            for (let j = 0; j < allScheme[i].length; j++) {
                let idx = allScheme[i][j];
                tempUsed[idx] = true;
            }
            if (DFS(allScheme, tempUsed, i + 1, satisfied + 1)) {
                return true;
            }
        }
    }
    return false;
}
