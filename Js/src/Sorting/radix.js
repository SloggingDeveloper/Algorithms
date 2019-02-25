'use strict';

(function(){
   
    const countSortDigit = function(arr, placeHolder){
      const modulusof = Math.pow(10,placeHolder);
      const divisor = Math.pow(10,placeHolder-1);
      const swapTempArr =[]
      for(let j = 0; j < 10 ;j++){
        swapTempArr.push({position: 0, frequency: 0});
      }

      const sortedArr = [];
      const getDigit = (element) =>  Math.floor((element%modulusof)/divisor);
      for(let i = 0; i < arr.length; i++){
          let digit = getDigit(arr[i]);
          swapTempArr[digit].frequency += 1;
          swapTempArr[digit].position += 1;
      }

      for(let j = 1; j < swapTempArr.length; j++){
        swapTempArr[j].position += swapTempArr[j-1].position;
      }

      for(let i = 0; i < arr.length; i++){
        let digit = getDigit(arr[i]);        
        sortedArr[swapTempArr[digit].position - swapTempArr[digit].frequency] = arr[i];
        swapTempArr[digit].frequency -= 1;
    }    
    
    return sortedArr;
    };

    const getNumberOfDigits = function(element){
     let totalDigits = 0;
     if(element === 0)
     return 1;

     while(element > 0){
        element = Math.floor(element/10)
        totalDigits += 1;
     }

     return totalDigits;
    }; 

    const sort = function(arr){
        let maxDigits = getNumberOfDigits(Math.max(...arr));
        for(let i = 1; i <=maxDigits; i++){            
          arr = countSortDigit(arr, i);
        }

       return arr;
    } 

    module.exports = {sort};
})();