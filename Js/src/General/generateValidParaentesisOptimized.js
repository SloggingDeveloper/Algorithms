(function () {
    'use strict';

    const generate = function (n) {
        const result = [];
        generateValid(0, 0, n,'', result);
        return result;
    };

    const generateValid = function (totalOpen, totalClose, n,currentValidParenthesis, result) {
        
        if(totalClose === n){
            if(result.indexOf(currentValidParenthesis) === -1)
              result.push(currentValidParenthesis);
            return;
        }

        if(totalOpen < n){
            currentValidParenthesis += '(';
            totalOpen +=1;
              generateValid(totalOpen, totalClose, n, currentValidParenthesis, result);
        }

        if(totalClose < totalOpen){
            currentValidParenthesis += ')';
            totalClose +=1;
              generateValid(totalOpen, totalClose, n, currentValidParenthesis, result);
        }
    };

    module.exports = generate;
})();