(function () {
    'use strict';

    const getMinimumWindow = function (str, substr) {

        let left = 0, right = 0, minimumLength = Number.MAX_VALUE, start = 0, end = 0, minWindowMem;
        for (let item of substr) {
            minWindowMem[item] = 0;
        }

        while (i < str.length && j < str.length && i <= j) {

            if (typeof minWindowMem[str[i]] !== 'undefined' && typeof minWindowMem[str[j]] !== 'undefined' & i != j) {
                let found = true;

                for (let item in minWindowMem) {
                    if (minWindowMem.hasOwnProperty(item)) {

                        if (minWindowMem[item] <= 0) {
                            found = false;
                            break;
                        }
                    }
                }

                if (found && (j-i + 1) < minimumLength) {
                   minimumLength = j-i + 1;
                   start = i;
                   end = j;
                   minWindowMem[str[i]] -= 1;
                   i++;
                }


                else if (typeof minWindowMem[str[i]] !== 'undefined') {
                    minWindowMem[str[i]] += 1;
                    j++;
                }
                else if (typeof minWindowMem[str[j]] !== 'undefined') {
                    minWindowMem[str[j]] += 1;
                    if (typeof minWindowMem[str[i]] !== 'undefined')
                        j++;
                    else {
                        i++;
                    }
                }


            };

            module.exports = getMinimumWindow;
        }) ();