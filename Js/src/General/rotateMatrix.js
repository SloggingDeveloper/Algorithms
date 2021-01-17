(function(){
    'use strict';
    //rotate by 90 degree anti-clockwise

    const rotate = function(matrix){
        let length = matrix[0].length;        

        for(let i = 0; i < length; i++){
            for(let j = i+1; j < length; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i]  = temp;
            }
        }        
      
        let halfLength = length/2;
        for(let i = 0; i < length; i++){
            for(let j = 0; j < halfLength; j++){    
                let temp = matrix[i][j];
                matrix[i][j] =  matrix[i][length-1-j];
                matrix[i][length-1-j] = temp;
            }
        }

      
       return matrix;
    };    
    
    module.exports = rotate;
})();