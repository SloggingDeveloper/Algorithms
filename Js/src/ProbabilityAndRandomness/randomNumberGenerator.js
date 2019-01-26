'use strict';

(function(){
    const randomNumberGenerator =  function(a, b){

        const range = Math.abs(b - a) + 1;
         const currrentRandom = Math.random(0, 1);
         return  a + Math.floor(currrentRandom * range);
    },

    getRandom01 = function(){
        return Math.round(Math.random());
    },
    
    random01 = function(a, b){  
      const range = Math.abs(b - a) + 1;
      const numberOfDigits = range.toString(2).length;  
      let currentRandomSum = 0;
      for(let i = 0 ; i < numberOfDigits; i++){
        currentRandomSum = currentRandomSum + (getRandom01() * Math.pow(2, i))
      }
    
      return a  +  (currentRandomSum%range);
    };

module.exports = {random01, randomNumberGenerator};    
})();