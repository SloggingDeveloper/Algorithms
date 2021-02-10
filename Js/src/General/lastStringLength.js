// do not use any string functions
(function(){
 'use strict';

 const getLength = function(input){
   if(typeof input === 'undefined' || input.length === 0){
       return 0;
   }
  let i = input.length-1, charaterCount=0, lastNonSpaceCharacterFound= false;  
   
   while(i >=0){
     if(input[i] === ' ' && lastNonSpaceCharacterFound){
         return charaterCount;
     }    
     if(input[i--] === ' '){        
         continue;
     }
     charaterCount++;        
     lastNonSpaceCharacterFound = true;
   }
    
   return 0;

 };
 module.exports = getLength;
})();