'use strict';

// Complexity: theta(n^3):

(function(){
const multiply = function(m1, m2){
    const rowsm1 = m1.length,
    columnsm1 = m1[0].length;
    const columnm2 = m2[0].length,
    result = [],
    defaultValue = 0;

    for(let i = 0; i < rowsm1; i++){
        result[i] = [];
        for(let j = 0;j < columnm2; j++){
            result[i].push(defaultValue);
            for(let k = 0; k < columnsm1; k++){
            result[i][j] += m1[i][k] * m2[k][j];
            }
        }
    }

    return result;
};

 const format = function(arr){
    let data = '';

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[0].length; j++){
            data = `${data} ${arr[i][j]} \t`;
        }
          data = `${data} \n`;
    }

    return data; 
};

module.exports = { multiply, format };
}());