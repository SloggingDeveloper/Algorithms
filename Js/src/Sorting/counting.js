'use strict';


(function(){
   
    const sort = function(arr){
     let sortedArr = [], makeShiftArr = [];

     for(let i = 0 ;i<arr.length; i++){
         makeShiftArr[arr[i]] = isNaN( makeShiftArr[arr[i]]) ? 1 :  makeShiftArr[arr[i]] + 1;
     }

      if(isNaN(makeShiftArr[0]))
       makeShiftArr[0] = 0;

     for(let j = 1; j < makeShiftArr.length; j++){
       makeShiftArr[j] = isNaN(makeShiftArr[j]) ? makeShiftArr[j-1] : makeShiftArr[j] + makeShiftArr[j-1]
     }
       
     for(let k = 0; k < arr.length; k++){
         sortedArr[makeShiftArr[arr[k]] - 1] = arr[k];
         makeShiftArr[arr[k]] = makeShiftArr[arr[k]] - 1;
     }
       return sortedArr;
    };

    module.exports = {sort};
})();