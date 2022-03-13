(function(){
 'use strict';
 const getCombinationCount = function(arr, sum){
    const dpArr = createDpArr(sum);   

    for(let i = 1; i <= sum; i++){
        for(let j = 0; j < arr.length; j++){
            let remaining = i - arr[j];
           
            if(remaining >= 0){
                dpArr[i] += dpArr[remaining];
            }
        }
    }
   return dpArr[sum];
 }; 

 const createDpArr = function(sum){
    const dpArr = [];
    for(let i = 0; i <= sum; i++){        
        dpArr.push(0);
    }  
    dpArr[0] = 1;
    return dpArr;
 };

 module.exports=getCombinationCount;
})();