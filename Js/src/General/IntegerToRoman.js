(function () {
    'use strict';

    const convert = function (data) {
        let result = '';

        result += convertDigits(Number.parseInt(data / 1000), 'M', '', '');
        data = data%1000;
        
        result += convertDigits(Number.parseInt(data / 100), 'C','M','D');
        data = data%100;                       
        
        result += convertDigits(Number.parseInt(data / 10), 'X','C','L');
        data = data%10;

        result += convertDigits(data % 10, 'I','X','V');
        return result;
    };

    const convertDigits = function (digit, ones, nextHigherPlaceValue, fives) {
        if (digit === 0)
            return '';

        if (digit === 9) {
            return ones + nextHigherPlaceValue;
        }

        if (digit === 4)
            return ones + fives;

        if (digit >= 5) {
            let result = fives;

            for (let i = 1; i <= digit - 5; i++) {
                result += ones;
            }
            return result;
        }
        
        let result = '';
        for (let i = 1; i <= digit; i++) {
            result += ones;
        }

        return result;

    };

    module.exports = convert;
})();