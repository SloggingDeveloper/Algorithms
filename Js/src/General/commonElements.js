'use strict';

(function(){

   const findCommonElements = function(arr1, arr2){
       let commonElements = {};
     for(let i = 0; i < arr1.length; i++){
         let arr1Element = arr1[i];
         if(commonElements[arr1Element] !== undefined)
           continue;

           commonElements[arr1Element] = 0;
     }
        for(let j = 0; j < arr2.length; j++){
            if(commonElements[arr2[j]] === 0)
            commonElements[arr2[j]] = 1;
        }
     
        for(let element in commonElements){
          if(commonElements[element] === 1)
          console.log(element);
        }
   };

module.exports = findCommonElements;    
})();