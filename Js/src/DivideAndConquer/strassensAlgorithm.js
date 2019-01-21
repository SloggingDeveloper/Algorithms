'use strict';

(function () {

    const generateResultMatrix = function (...p) {

        if(typeof p[0] === 'number'){
        return [[p[5] + p[4] + p[3] - p[1], p[0] + p[1]],
        [p[2] + p[3], p[0] + p[4] - p[2] - p[6]]];
        }
        
        return [[addMatrix(addMatrix(p[5], p[4]), subtractMatrix(p[3], p[1])), addMatrix(p[0], p[1])],
           [addMatrix(p[2], p[3]), subtractMatrix(addMatrix(p[0], p[4]), subtractMatrix(p[2], p[6]))] ];
        
    };   

    const addMatrix = function(m1, m2){
       let result = []; 
       for(let i = 0; i < m1.length; i++){
           result.push([]);
           for(let j = 0; j < m1[0].length; j++){
               result[i].push(m1[i][j] + m2[i][j]);             
           }
       }
       return result;
    };

    const subtractMatrix = function(m1, m2){
        let result = []; 
        for(let i = 0; i < m1.length; i++){
            result.push([]);
            for(let j = 0; j < m1[0].length; j++){
                result[i].push(m1[i][j] - m2[i][j]);             
            }
        }
        return result;
    };

    const multiply2X2Matrix = function(m1, m2){
        const [[a, b],[c, d]] = m1,
            [[e, f], [g, h]] = m2;

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


    const divideMatrixIntoNby2Matrices = function(m1){
      
      const [halfRows, halfColumns, dividedArrayA, dividedArrayB, dividedArrayC, dividedArrayD] 
      = [m1.length/2, m1[0].length/2, [[],[]], [[],[]], [[],[]], [[],[]]];

      for(let i = 0; i < halfRows; i++){
          for(let j = 0; j < halfColumns; j++ ){
            dividedArrayA[i].push(m1[i][j]);
          }
      }

      for(let i = 0; i < halfRows; i++){
        for(let j = halfColumns; j < m1[0].length; j++ ){
          dividedArrayB[i].push(m1[i][j]);
        }
    }

    for(let i = halfRows; i < m1.length; i++){
        for(let j = 0; j < halfColumns; j++ ){
          dividedArrayC[i-halfRows].push(m1[i][j]);
        }
    }

    for(let i = halfRows; i < m1.length; i++){
        for(let j = halfColumns; j < m1[0].length; j++ ){
          dividedArrayD[i-halfRows].push(m1[i][j]);
        }
    }

     return [dividedArrayA, dividedArrayB, dividedArrayC, dividedArrayD];
    };

    const multiplyMatrix = function (m1, m2) {

        if(m1.length === 2){
         return multiply2X2Matrix(m1, m2);
        }
         const [a, b, c, d] = divideMatrixIntoNby2Matrices(m1);
         const [e, f, g, h] = divideMatrixIntoNby2Matrices(m2);

        // Variables: p1-p7
        const p1 = multiplyMatrix(a, subtractMatrix(f, h)),
            p2 = multiplyMatrix(h, addMatrix(a, b)),
            p3 = multiplyMatrix(e, addMatrix(c, d)),
            p4 = multiplyMatrix(d, subtractMatrix(g, e)),
            p5 = multiplyMatrix(addMatrix(a, d), addMatrix(e, h)),
            p6 = multiplyMatrix(subtractMatrix(b, d), addMatrix(g, h)),
            p7 = multiplyMatrix(subtractMatrix(a, c), addMatrix(e, f));

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

        return Math.pow(2, Math.ceil(Math.log2(maxofRowsAndColumns)));
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

        return multiplyMatrix(m1, m2);
    };

    module.exports = { multiply };
}());