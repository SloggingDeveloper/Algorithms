(function(){
 'use strict';
 
 const getMaxSubArray = function(arr){  
    let currentMaxValueIndex = 0;
    let currentMaxValue = arr[0];
    let maxSumArr = [ {maxValue:arr[0],startIndex : 0}];
    for(let i = 1; i < arr.length; i++){        
       
        let sum = arr[i] + maxSumArr[i-1].maxValue;

        if(sum >= arr[i] && sum > 0){
            maxSumArr[i] =  {maxValue:sum, startIndex : maxSumArr[i-1].startIndex};
        }
        else if(sum < arr[i]){
            maxSumArr[i] =  {maxValue:arr[i], startIndex: i};          
        }

        else{
            maxSumArr[i] =  {maxValue: Number.MIN_VALUE, startIndex: i+1};
        }

        if(currentMaxValue <= maxSumArr[i].maxValue){
            currentMaxValue = maxSumArr[i].maxValue;
            currentMaxValueIndex = i;
        }
        
    }
    console.log(maxSumArr,currentMaxValueIndex);
    return arr.slice(maxSumArr[currentMaxValueIndex].startIndex, currentMaxValueIndex + 1);
 };

 module.exports = getMaxSubArray;
})();