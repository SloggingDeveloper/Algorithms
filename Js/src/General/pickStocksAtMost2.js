'use strict';
(function(){

    function getMaxProfit(inputArr){
        let maxProfit = 0, min=Number.MAX_VALUE;
        let twoTransactions = [0,0]
       for(let i = 0; i < inputArr.length; i++){
           
        if(inputArr[i] < min){
            min = inputArr[i];        
        }

        let diff = inputArr[i] - min;

        if(diff > maxProfit)
        maxProfit = diff;
       

       if(diff < maxProfit){
        setTransactions(twoTransactions, maxProfit);          
           maxProfit =0;
           min = inputArr[i];
       }
    }
   
    setTransactions(twoTransactions, maxProfit); 
       return twoTransactions[0] + twoTransactions[1];
    }

    function setTransactions(twoTransactions, maxProfit){
        var smallerIndex = twoTransactions[0] > twoTransactions[1] ? 1 : 0;
        if(maxProfit > twoTransactions[smallerIndex]){
            twoTransactions[smallerIndex] = maxProfit;
        }     
    }

    module.exports = getMaxProfit;
})();