'use strict';

(function(){
    function addBinary(a,b){
      let length = (a.length > b.length ? a.length : b.length) + 1;
      let arrA = getBinaryArray(a, length);
      let arrB = getBinaryArray(b, length);
      console.log(arrA, arrB)  
      return addBinaryArray(arrA, arrB);
    }

   function getBinaryArray(str, length){
      let arr = [];
      let startIndex = length - str.length;

      for(let i = 0; i < startIndex; i++){
        arr[i] = 0;
      }
      for(let i =0; i < str.length; i++){
          arr[startIndex + i] = Number.parseInt(str[i]);
      }

      return arr;
   }

   function addBinaryArray(a,b){
    let result = [];
    let carryOn = 0;
    for(let i = a.length - 1; i >= 0;i--){
        let addedBits = addBits(a[i], b[i], carryOn)
         carryOn = addedBits[0];
         result[i] = addedBits[1];
    }
    return result.join('');
   }

   function addBits(a,b, carryOn){
       let arr = [0,0];
      if(a ^ b){
          arr[1]= 1;
      }

      if(a & b){
          arr[0] = 1;          
      }

      if(carryOn){
      let carryOnAdded = addBits(arr[1], carryOn,0);
      arr[0] = carryOnAdded[0] | arr[0];
      arr[1] = carryOnAdded[1];
      }
      return arr;
   }

    module.exports= addBinary;
})();