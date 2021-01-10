(function(){
 'use strict';

 const contains = function(mainStr, subStr1, subStr2){
 
     return containsStr(mainStr, subStr1) && containsStr(mainStr, subStr2);    

 };

 const containsStr = function(mainStr, subStr){

    if(typeof(mainStr) === 'undefined' || subStr === '' || typeof(subStr) === 'undefined'){
        return false;
    }

    let subStrIndex = 0;

    for(let i = 0; i < mainStr.length; i++){
        
        if(subStrIndex === subStr.length)
         break;

        if(mainStr[i] === subStr[subStrIndex])
         subStrIndex++;
    }

    return  subStrIndex === subStr.length;
 }

 module.exports = contains;
})();