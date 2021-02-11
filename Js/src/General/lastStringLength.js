// do not use any string functions
(function(){
 'use strict';

 const getLength = function(input){
   if(typeof input === 'undefined' || input.length === 0){
       return 0;
   }
  let i = input.length-1, charaterCount=0;  
   
   while(i >=0){
     if(input[i] === ' ' && charaterCount > 0){
         return charaterCount;
     }    
     if(input[i--] === ' '){        
         continue;
     }
     charaterCount++;     
   }
    
   return 0;

 };
 module.exports = getLength;
})();