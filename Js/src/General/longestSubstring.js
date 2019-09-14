'use strict';

(function(){
    var lengthOfLongestSubstring = function(s) {
        var charArr= s.split('');
           var longestSubstringLength = 0;
          
           var dict = {};
           var maxLength = charArr.length === 0 ? 0: 1;
           for(var i = 0; i < charArr.length; i++){
               if((dict[charArr[i]] || {}).present){
                   maxLength = getMax(maxLength, longestSubstringLength);
                   longestSubstringLength = 0;


                   i = dict[charArr[i]].index;                
                   dict = {};               
                   continue;
               }
               longestSubstringLength++;
               dict[charArr[i]] = {present : true, index : i};
           }
           
           return getMax(maxLength, longestSubstringLength);    
   };
   
   var getMax = function(num1, num2){
       return num1 > num2 ? num1 : num2;
   };

   module.exports = lengthOfLongestSubstring;
})();