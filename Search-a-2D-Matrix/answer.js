// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix.This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.


//     Example 1:


// Input: matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 13
// Output: false


// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
//     - 104 <= matrix[i][j], target <= 104

///////////////////////////////////////////////////////////////////////////////////////////////

function searchRow(row, target) {
    for (let i = 0; i < row.length; i++) {
        if (row[i] === target) {
            return true;
        }
    }
    return false;
}

var searchMatrix = function (matrix, target) {
    for (i = 0; i < matrix.length; i++) {
        if (matrix[i][0] > target) {
            return false;
        } else {
            if (searchRow(matrix[i], target)) {
                return true;
            }
        }
    }
    return false
};