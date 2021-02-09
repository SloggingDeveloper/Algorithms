(function(){
'use strict';

const getMaxArea = function(input){
 
    let i = 0, j = input.length-1, maxArea = 0;

    while(i < j){
       
        const currentArea = (j-i)*( input[j] < input[i]? input[j]:input[i]);
        if(currentArea > maxArea){
            maxArea = currentArea;
        }
      i++;
      j--;
    }
    return maxArea;
};

module.exports = getMaxArea;

})();