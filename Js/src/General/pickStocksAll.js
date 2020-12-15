'use strict';
(function(){

    function getMaxProfit(inputArr){
        let maxProfit = 0, min=Number.MAX_VALUE, sumOfMaxProfit = 0;

       for(let i = 0; i < inputArr.length; i++){
           
        if(inputArr[i] < min){
            min = inputArr[i];        
        }

        let diff = inputArr[i] - min;

        if(diff > maxProfit)
        maxProfit = diff;
       

       if(diff < maxProfit){
           sumOfMaxProfit = sumOfMaxProfit + maxProfit;
           maxProfit =0;
           min = inputArr[i];
       }
    }
       return sumOfMaxProfit + maxProfit;
    }

    module.exports = getMaxProfit;
})();