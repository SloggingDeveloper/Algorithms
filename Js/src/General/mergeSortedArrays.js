(function(){
 'use strict';

 const merge = function(sortedArrays){
    
    const cleanedUpArrays = sanitize(sortedArrays);

     if(!cleanedUpArrays.length === 0)
      return null;

    let result = null;
    for(let i = 1; i < cleanedUpArrays.length; i++ ){
       const firstInput = result === null ? cleanedUpArrays[i-1] : result;
       result = mergeTwoArrays(firstInput, cleanedUpArrays[i]);   
    }
    return result;
 }

 const sanitize = function(sortedArrays){
     const cleanedUpArrays = [];
     for(let item of sortedArrays){
        if(item && item.length > 0){
            cleanedUpArrays.push(item);
        }
     }
     return cleanedUpArrays;
 }

 const mergeTwoArrays = function(arr1, arr2){
   const result = [];
   let i = 0, j = 0;
   while(i < arr1.length && j < arr2.length){
       if(arr1[i] <= arr2[j]){
           result.push(arr1[i]);
           i++;
           continue;
       }
       result.push(arr2[j]);
        j++;
   }
   
   if(i < arr1.length){
       for(let i1 = i; i1 < arr1.length; i1++){
           result.push(arr1[i1]);
       }
       return result;
   }

   for(let j1 = j; j1 < arr2.length; j1++){
    result.push(arr2[j1]);
}
return result;

 };

 module.exports = merge;
})();