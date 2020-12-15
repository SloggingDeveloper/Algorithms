const divide = require("./divideIntegerByAddition");

(function () {
    'use strict';

    const divide = function (dividend, divisor) {

        if (dividend === 0)
            return 0;

        if (divisor === 0)
            return null;

        let dividendUnsigned = dividend > 0 ? dividend : -dividend;
        let divisorUnsigned = divisor > 0 ? divisor : -divisor;
        const sign =  (dividend > 0 ? 1 : -1) * (divisor > 0 ? 1 : -1);
        if(dividendUnsigned < divisorUnsigned)
           return 1;

        const inc = [];
        let i = 0;
        let res = 0;
        while(divisorUnsigned <= dividendUnsigned){
            inc[i] = divisorUnsigned;
            divisorUnsigned = divisorUnsigned << 1;
            i++;
        }
        i--;

        while(i>=0 && dividendUnsigned > 0){         
            if(dividendUnsigned >= inc[i]){
                dividendUnsigned -= inc[i];
                 res += 1 << i;
            }            
         i--;
        }      
         return sign*res;
    };
    module.exports = divide;
})();