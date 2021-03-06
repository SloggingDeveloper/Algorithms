(function () {
    'use strict';

    const getMinimumWindow = function (str, substr) {

        let i = 0, j = 0,
            minimumLength = Number.MAX_VALUE,
            start = 0, end = 0, minWindowMem = {},
            expectedMinWindowMem = {},
            prevJ = -1;

        for (let item of substr) {
            minWindowMem[item] = 0;
            if(typeof expectedMinWindowMem[item] === 'undefined'){
                expectedMinWindowMem[item] = 0;
            }

            expectedMinWindowMem[item] += 1;
        }

        while (i < str.length && j < str.length && i <= j) {          
            if (typeof minWindowMem[str[i]] !== 'undefined' && minWindowMem[str[i]] <= 0) {
                minWindowMem[str[i]] += 1;
            }

            if (i !== j && typeof minWindowMem[str[j]] !== 'undefined' && prevJ !== j) {
                minWindowMem[str[j]] += 1;
                prevJ = j;
            }

            if ((j - i + 1) >= substr.length && checkAllCharactersFound(minWindowMem, expectedMinWindowMem)) {

                if ((j - i + 1) < minimumLength) {
                    minimumLength = j - i + 1;
                    start = i;
                    end = j;
                }
                minWindowMem[str[i]] -= 1;
                i++;
                continue;
            }


            if (typeof minWindowMem[str[i]] !== 'undefined') {
                j++;
                continue;
            }

            if (typeof minWindowMem[str[j]] !== 'undefined' && i < j) {
                i++;
                continue;
            }

            j++;
            i++;           

        }

        return str.substr(start, end - start + 1);
    }

    const checkAllCharactersFound = function (minWindowMem, expectedMinWindowMem) {
        for (let item in minWindowMem) {
            if (minWindowMem[item] !== expectedMinWindowMem[item] )
                return false;
        }
        return true;
    };

    module.exports = getMinimumWindow;
})();