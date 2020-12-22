(function () {
    'use strict';

    const generate = function (setCount) {
        return generateValid(0, 0, setCount);
    };

    const generateValid = function (totalOpen, totalClose, setCount) {
        
        if(totalClose > totalOpen || totalOpen > setCount)
          return null;

        if(totalClose === setCount && totalClose === totalOpen)
           return [''];

       
        if(totalOpen === 0 || (totalOpen === totalClose && totalOpen < setCount)) {
            return  addCurrentToNextGeneratedSet('(',totalOpen+1, totalClose, setCount);
        }
        
        if(totalOpen === setCount && totalClose < setCount){                   
            return addCurrentToNextGeneratedSet(')',totalOpen, totalClose+1, setCount);
        }

        let openCombinations = addCurrentToNextGeneratedSet('(', totalOpen+1, totalClose, setCount);
        let closeCombinations = addCurrentToNextGeneratedSet(')', totalOpen, totalClose + 1, setCount);       
        return openCombinations ? openCombinations.concat(closeCombinations ? closeCombinations : []) :
        closeCombinations;
    };

    const addCurrentToNextGeneratedSet = function(current, totalOpen,totalClose, setCount){
        const result = [];
        const nextSet = generateValid(totalOpen,totalClose, setCount);           
            if(nextSet && nextSet.length > 0){
                for(let item of nextSet){                    
                  result.push(current + item);
                }
                return result;
            }            
             return null;
    }

    module.exports = generate;
})();