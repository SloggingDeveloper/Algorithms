(function () {
    'use strict';
    const getMatchPosition = function (mainStr, subStr) {

        if (mainStr.length < subStr.length)
            return -1;

        const lookup = getPrefixSuffixLookup(subStr);

        let i = 0;
        let j = 0;        
        while (i <= mainStr.length) {           
             
            if(i > mainStr.length-subStr.length && j === 0)
                return -1;

            let initiali = i;
            while (j < subStr.length && initiali < mainStr.length &&  subStr[j++] == mainStr[initiali++]) {              
            }

            if (j === subStr.length && initiali <= mainStr.length)
                return i;

            if (lookup[j - 1] === 0) {                
                j = 0;
            }
            else {
                j = lookup[j - 1];               
            }

            i = initiali;
        }
        
        return -1;
    };

    const getPrefixSuffixLookup = function (str) {
        let lookup = [0];
        let i = 0;
        let j = 1;

        while (j < str.length) {
            if (str[i] === str[j]) {
                lookup[j] = i + 1;
                i++;
                j++
            }
            else {
                lookup[j] = 0;
                if (i === 0)
                    j++;
                i = 0;
            }
        }

        console.log(lookup);
        return lookup;
    };

    module.exports = getMatchPosition;
})();