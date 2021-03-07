(function () {
    'use strict';

    const getLongestSubstring = function (input) {

        let lookup = {};

        let maxLengthSubStr='', subString = '';
        for (let i = 0; i < input.length; i++) {           
            
             maxLengthSubStr = maxLengthSubStr.length < subString.length ? subString : maxLengthSubStr;
             var char = input[i];
            if (!lookup.hasOwnProperty(char)) {
                subString += char;
                lookup[char] = i;
            }
            else{              
                i = lookup[char];
                console.log(lookup);
                subString = '';
                lookup = {};
            }
        }
        return maxLengthSubStr;
    };

    module.exports = getLongestSubstring;
})();