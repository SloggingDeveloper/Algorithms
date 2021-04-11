(function () {
    'use strict';

    const findNextPermutation = function (input) {

        let key = findPartitionKey(input);
        if (key === null) {
          return reverseInput(input);
        }

        let nextKey = findNumberGreaterThanPartition(input, key);
        let temp = input[nextKey];
        input[nextKey] = input[key];
        input[key] = temp;

        return input;
    };

    const reverseInput = function(input){
        let start = 0, end = input.length-1;

        while(start < end){
            let temp = input[start];
            input[start] = input[end];
            input[end] = temp;
            start++;
            end--;
        }
        return input;
    }

    const findNumberGreaterThanPartition = function (input, key) {
        let resultKey = key + 1;
        for (let i = key + 2; i < input.length; i++) {
            if (input[i] > input[key] && input[resultKey] > input[i]) {
                resultKey = i;
            }
        }
        return resultKey;
    };

    const findPartitionKey = function (input) {
        let key = null;
        let prevValue = input[input.length - 1];
        for (let i = input.length - 2; i >= 0; i--) {
            if (input[i] < prevValue) {
                key = i;
                break;
            }
            prevValue = input[i];
        }
        return key;
    };

    module.exports = findNextPermutation;
})();