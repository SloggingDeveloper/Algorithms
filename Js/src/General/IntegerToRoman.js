(function () {
    'use strict';
    const lookup = ['I','V','X','L','C','D','M'];

    
    const convert = function (data) {
        let result = '';
        let scale = 1000;

        for(let i = 6; i >= 0; i -= 2){
            result += convertDigits(Number.parseInt(data / scale), i);           
            data = data%scale;
            scale = scale/10;
        }
        return result;
    };

    const convertDigits = function (digit, currentlookupPosition) {
        if (digit === 0)
            return '';

        if (digit === 9) {
            return lookup[currentlookupPosition] + lookup[currentlookupPosition + 2];
        }

        if (digit === 4)
            return lookup[currentlookupPosition] + lookup[currentlookupPosition + 1];

        if (digit >= 5) {
            let result = lookup[currentlookupPosition + 1];

            for (let i = 1; i <= digit - 5; i++) {
                result += lookup[currentlookupPosition];
            }
            return result;
        }
        
        let result = '';
        for (let i = 1; i <= digit; i++) {
            result += lookup[currentlookupPosition];
        }

        return result;

    };

    module.exports = convert;
})();