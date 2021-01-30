(function(){
    'use strict';

    const isPermutationOfPalindrome = function(str){
        let lookup = {};
        for(let item of str){
          if(typeof lookup[item] === 'undefined'){
              lookup[item] = 1;
          }
          else{
              lookup[item] = (lookup[item] + 1)%2;
          }
            
        }
        
        let greaterThanZeroCounts = 0;
        for(let item in lookup){
            if(lookup.hasOwnProperty(item) && lookup[item] !== 0){
                greaterThanZeroCounts++;                
            }           
        }

       return str.length%2 === 0 ? (greaterThanZeroCounts === 0 ? true: false) :  (greaterThanZeroCounts === 1 ? true: false);        
    };

    module.exports = isPermutationOfPalindrome;
})();