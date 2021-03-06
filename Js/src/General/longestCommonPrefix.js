(function(){
    'use strict';

const emptyStr = '';
const getLongestCommonPrefix = function(input){

    if(!isValidInput(input))
      return emptyStr;    
    
    let currentMaxCommonPrefix =  input[0].trim();
    for(let i=1; i < input.length; i++){
        let common = findCommonPrefix(currentMaxCommonPrefix.trim().toLowerCase(), input[i].trim().toLowerCase());
        if(common === emptyStr)
          return emptyStr;
        
          currentMaxCommonPrefix = common;
    }

    return currentMaxCommonPrefix;
};

const findCommonPrefix = function(str1, str2){   

     let maxLength =  str1.length > str2.length ? str2.length: str1.length;
     let newCommonPrefix = emptyStr;

     for(let i = 0; i < maxLength; i++){
        if(str1[i] !== str2[i]){
           break;
        }

        newCommonPrefix += str1[i];
     }
     return newCommonPrefix;
};

const isValidInput = function(input){
    if(!input || input.length === 0)
     return false;

     for(let item of input){
         if(typeof item !== 'string' || item.trim() === '')
           return false;
     }
     return true;

};
module.exports = getLongestCommonPrefix;
})();