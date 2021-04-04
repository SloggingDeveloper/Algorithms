(function () {
    'use strict';

    const getMinimumWindow = function (str, substr) {

        let i = 0, j = 0,
            minimumLength = Number.MAX_VALUE,
            start = 0, end = 0, minWindowMem,
            prevI = -1,
            prevJ = -1;

        for (let item of substr) {
            minWindowMem[item] = 0;
        }

        while (i < str.length && j < str.length && i <= j) {

            if (typeof minWindowMem[str[i]] !== 'undefined' && prevI !== i) {
                minWindowMem[str[i]] += 1;
            }

            if (typeof minWindowMem[str[j]] !== 'undefined' && prevJ !== j) {
                minWindowMem[str[j]] += 1;
            }

            if (checkAllCharactersFound(minWindowMem)) {
                if ((j - i + 1) < minimumLength) {
                    minimumLength = j - i + 1;
                    start = i;
                    end = j;
                }
                minWindowMem[str[i]] -= 1;
                i++;
            }


            else if (typeof minWindowMem[str[i]] !== 'undefined') {
                j++;
            }
            
            else {
                i++;
                j++;
            }

            prevI = i;
            prevJ = j;
        };
    }

    const checkAllCharactersFound = function (minWindowMem) {
        for (let item in minWindowMem) {
            if (minWindowMem.hasOwnProperty(item) && minWindowMem[item] <= 0)
                return false;
        }
        return true;
    };

    module.exports = getMinimumWindow;
})();