(function(){
  'use strict';
  
  const getMissingInteger = function(arr){
   
    for(let i = 0; i< arr.length;i++){
        if(arr[i] !== i+1)
        {
            if(arr[i] <= arr.length && arr[i] > 0){
              let temp = arr[i];
              arr[i] = arr[temp-1];
              arr[temp-1]= temp;
            }

            if(arr[i] < i + 1 && arr[i] > 0){
                let temp = arr[i];
                arr[i] = arr[temp-1];
                arr[temp-1]= temp;
            }
        }
    }
    console.log(arr);
    
    for(let i =0; i< arr.length;i++){
        if(arr[i] != i+1)
          return i+1;
    }

    return null;
  };

  module.exports = getMissingInteger;
})();