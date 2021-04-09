(function(){
 'use strict';

 const findNextPermutation = function(input){

    findPartitionKey(input);
 };

 const findPartitionKey = function(input){
    let key = null;
    let prevKey = input[input.length-1];
   for(let i = input.length-2; i >= 0;i--){
      if(input[i] < prevKey){
          key = i;
          break;
      }
   }
   return key;
 };

 module.exports=findNextPermutation;
})();