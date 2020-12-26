(function () {
    'use strict';

    const generate = function (n) {
        var result = [0];

        for (let i = 0; i < n; i++) {
            let startingBit = 1 << i;
            let lastIndex = result.length - 1;
            for (let j = lastIndex; j >= 0; j--) {
                result.push(result[j] + startingBit);
            }
        }
       return result;
    };

    module.exports = generate;
})();