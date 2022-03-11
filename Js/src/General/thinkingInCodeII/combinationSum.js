(function () {
    'use strict';

    const getAllCombinations = function (arr, target) {
        const resultSet = [];
        recurringCombination(arr, [], resultSet, target);
        return resultSet;
    };

    const recurringCombination = function (arr,
        subArr, resultSet, neededToReachTarget) {

        for (let i = 0; i < arr.length; i++) {
            let remaining = neededToReachTarget - arr[i];
            let result = subArr.concat(arr[i]);
            if (remaining === 0) {
                resultSet.push(result);
            }
            else if (remaining > 0) {
                recurringCombination(arr, result, resultSet, remaining);
            }
        }
    };

    module.exports = getAllCombinations;

})();