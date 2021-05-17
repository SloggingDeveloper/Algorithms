(function(){
 'use strict';

 const getCombinations = function(input){
  input = input.sort(function(p,n){if(p < n) return -1; if(p > n) return 1; return 0;});

  let result =  generate(input);  
  return result;
 };

 const generate = function(input){   
    const combinations = [];
    for(let i = 0; i < input.length; i++){       

        let result = generate(input.filter(function(e,index){ if(index !== i) return true;}));          
        for(let item of result){
            combinations.push([input[i]].concat(item));           
        }

        if(result.length === 0)
          combinations.push([input[i]]);
                  
        while(i + 1 < input.length && input[i] === input[i+1]){
            i++;
        }       
    }
    return combinations;
 };

 module.exports = getCombinations;
})();