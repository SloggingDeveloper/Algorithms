'use strict';

(function () {

    const generateResultMatrix = function (...p) {
        return [[p[5] + p[4] + p[3] - p[1], p[0] + p[1]],
        [p[2] + p[3], p[0] + p[4] - p[2] - p[6]]];
    };

    const multiplyMatrix = function(m1, m2){
      
    };

    const addMatrix = function(m1, m2){

    };

    const subtractMatrix = function(m1, m2){
       
    };

    const multiply2X2Matrix = function (m1, m2) {
        const [a, b, c, d] = m1,
            [e, f, g, h] = m2;

        // Variables: p1-p7
        const p1 = a * (f - h),
            p2 = h * (a + b),
            p3 = e * (c + d),
            p4 = d * (g - e),
            p5 = (a + d) * (e + h),
            p6 = (b - d) * (g + h),
            p7 = (a - c) * (e + f);

        return generateResultMatrix(p1, p2, p3, p4, p5, p6, p7);
    };    

    const findSquareMatrixFactorofTwoMatrices = function (m1Rows, m1Columns, m2Rows, m2Columns) {
        const maxRows = m1Rows > m2Rows
        ? m1Rows
        : m2Rows;

        const maxColumns = m1Columns > m2Columns
        ? m1Columns
        : m2Columns;

        const maxofRowsAndColumns = maxRows > maxColumns
        ? maxRows
        : maxColumns;

        return Math.ceil(Math.log2(maxofRowsAndColumns));
    };

    const normalizeToSquareMatrixFactor = function (matrix, squareMatrixFactor) {
        const [rows, columns] = [matrix.length, matrix[0].length];

        if (rows === columns === squareMatrixFactor) {
            return;
        }

        const numberOfRowsToPush = squareMatrixFactor - rows,
        numberOfColumnsToPush = squareMatrixFactor - columns,
        defaultValueToFill = 0;

        // Column consistency
        for(let i = 0; i < rows; i++){
             for(let j = 0; j < numberOfColumnsToPush; j++){
                 matrix[i].push(defaultValueToFill);
             }
        }

        // Row consistency
        for(let i = 0; i < numberOfRowsToPush; i++){
            let newMatrix = [];

            for(let j = 0; j < columns + numberOfColumnsToPush; j++){
                newMatrix.push(defaultValueToFill);
            }
            matrix.push(newMatrix);
       }
    };

    const ensureSquareMatrixForStrassensMultiplication = function (m1, m2) {
        const [m1Rows, m1Columns, m2Rows, m2Columns] =
        [m1.length, m1[0].length, m2.length, m2[0].length];

        const squareMatrixFactor = findSquareMatrixFactorofTwoMatrices(m1Rows,
            m1Columns, m2Rows, m2Columns);

        normalizeToSquareMatrixFactor(m1, squareMatrixFactor);
        normalizeToSquareMatrixFactor(m2, squareMatrixFactor);
    };

    const multiply = function (m1, m2) {
        ensureSquareMatrixForStrassensMultiplication(m1, m2);

        return multiply2X2Matrix(m1, m2);
    };

    module.exports = { multiply };
}());