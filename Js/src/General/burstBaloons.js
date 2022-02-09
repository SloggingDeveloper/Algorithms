(function () {
    /*
    two dimensional DP:
    [3,1,5,8] makiing a 4x4 matrix and finding whats the max value at first row last column
    as the matrix will be filled upper part of diagonal running from left top to right bottom
    The logic is: if k is the last element to be chosen whats max on its and its right.
    
    formula: DP[i][j] =  DP[LeftBoundary][j-1] + nums[j] + DP[j+1][RightBoundary]
    */

    const findMaxBaloonBurstValue = function (arr) {
        const matrix = performDynamicCalculation(arr); 
        return matrix[0][arr.length-1];      
    };

    const printMatrix = function (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log('--------------------------------');
            for (let j = 0; j < matrix.length; j++) {
                console.log('  ' + matrix[i][j]);
            }
        }
    }
    const performDynamicCalculation = function (arr) {
        const matrix = create2DMatrix(arr);      
        for (let i = 1; i <= arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                let leftBoundary = j;
                let rightBoundary = j + i - 1;
                for (let k = j; k <= rightBoundary && k < arr.length; k++) {
                    let current = (arr[leftBoundary - 1] || 1) * arr[k] * (arr[rightBoundary + 1] || 1);

                    let leftSide = 0;
                    if (k > leftBoundary)
                        leftSide = matrix[leftBoundary][k - 1] || 0;
                    let rightSide = 0;
                    if (k < rightBoundary && (k+1) < arr.length)
                        rightSide = matrix[k + 1][rightBoundary] || 0;

                    matrix[j][rightBoundary] = Math.max(matrix[j][rightBoundary], leftSide + current + rightSide);
                  
                }
            }
        }
        return matrix;
    };

    const getMaxValue = function (matrix) {

    };

    const create2DMatrix = function (arr) {
        var matrix = [];
        for (let i = 0; i < arr.length; i++) {
            matrix[i] = [];
            for (let j = 0; j < arr.length; j++) {
                matrix[i][j] = 0;
            }
        }
        return matrix;
    };

    module.exports = findMaxBaloonBurstValue;
})();