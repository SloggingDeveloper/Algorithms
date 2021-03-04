(function () {
    'use strict';

    const lookup = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    const getCombination = function (input) {        
        const cleanInput = sanitizeInput(input);
        return generateCombinations(cleanInput[0], cleanInput.slice(1, cleanInput.length));
    };

    const sanitizeInput = function (input) {
        const splitInput = [];
        for (let item of input.split('')) {

            if (!Number.isNaN(item)) {
                let num = Number.parseInt(item);

                if (num > 1)
                    splitInput.push(num);
            }
        }
        return splitInput;
    };

    const generateCombinations = function (currentNumber, remainingCombination) {       
        let str = lookup[currentNumber];
        let result = [];
        for (let item of str.split('')) {

            if (remainingCombination.length === 0) {
                result.push(item);
                continue;
            }

            let furtherCombinations = generateCombinations(remainingCombination[0],
                remainingCombination.slice(1, remainingCombination.length));

            for (let combination of furtherCombinations) {
                result.push(`${item}${combination}`);
            }
        }

        return result;
    };

    module.exports = getCombination;
})();