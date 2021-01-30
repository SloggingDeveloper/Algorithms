(function(){
 'use strict';
 //Problem Type: Hard

 const contains = function(s1, s2, s3){
   
 
    if((s1.length + s2.length) !== s3.length)
      return false;

    const matrix = [];

    for(let i = 0; i <= s1.length;i++){
        matrix[i] = [];
        for(let j = 0; j <= s2.length; j++){
            matrix[i][j] = false;
        }
    }

    matrix[0][0] = true;
    
    for(let i = 0; i <= s1.length;i++){       
        for(let j = 0; j <= s2.length; j++){

            if(i === 0 && j===0){
                continue;
            }

            if(i === 0){
                if(s3[j-1] === s2[j-1]){
                 matrix[i][j] = matrix[i][j-1];
                }
                continue;
            }

            if(j === 0){
                if(s3[i-1] === s1[i-1]){
                    matrix[i][j] = matrix[i-1][j];
                }
                continue;
            }
            
            if(s3[i+j-1] === s2[j-1] || s3[i+j-1] === s1[i-1]){
                matrix[i][j] = matrix[i-1][j] || matrix[i][j-1];
            }

        }
    }

    return  matrix[s1.length][s2.length];
    
 };

 module.exports = contains;
})();