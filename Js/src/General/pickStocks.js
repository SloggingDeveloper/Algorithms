'use strict';
(function(){

    function getDataForMaxProfit(inputArr){
    let result = {
        max: Number.MIN_VALUE,
        min: Number.MAX_VALUE,
        maxIndex : -1,
        minIndex:-1
    };

    let trackingMinIndex = -1;

       for(let i = 0; i < inputArr.length; i++){
           if(inputArr[i] > result.max)
           {
            result.max = inputArr[i];
            result.maxIndex = i;
           }

           if(inputArr[i] < result.min){
            trackingMinIndex = i;
           }

           if(trackingMinIndex !== -1 && trackingMinIndex <= result.maxIndex){
              result.min = inputArr[trackingMinIndex];
              result.minIndex = trackingMinIndex;
              trackingMinIndex = -1;       
           }

       }
      
       return result;
    }

    module.exports = getDataForMaxProfit;
})();