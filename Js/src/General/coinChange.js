'use strict';

(function () {
    var invalid = -1;
    var getMinimumCoins = function (coins, amount) {
        var dpArray = buildArray(amount);
        populateValuesInDpArray(dpArray, coins);
        return dpArray[amount];
    };

    var buildArray = function (amount) {
        var arr = [0];
        for (var i = 1; i <= amount; i++) {
            arr.push(invalid);
        }
        return arr;
    };

    var populateValuesInDpArray = function (dpArray, coins) {

        for (var i = 0; i < coins.length; i++) {
            for (var j = 0; j < dpArray.length; j++) {               
                var balance = j - coins[i];

                if(balance < 0)
                 continue;

                if(dpArray[balance] !== invalid){
                    var count = 1 + dpArray[balance];
                    if(dpArray[j] < 0 || dpArray[j] > count){
                        dpArray[j] = count; 
                    }
                    continue;
                }
              }
        }

    };

    module.exports = getMinimumCoins;
})();