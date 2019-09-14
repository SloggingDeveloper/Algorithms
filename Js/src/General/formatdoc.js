/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if(amount === 0)
     return 0;
     
    var result =  getMinimumCoins(coins, amount);
    if(result === 0)
        return -1;
    return result;
};

var getMinimumCoins = function (coins, amount) {
    var dpArray = buildArray(coins, amount);
    populateValuesInDpArray(dpArray, coins, amount);
    return dpArray[coins.length - 1][amount];
};

var populateValuesInDpArray = function (dpArray, coins, amount) {
    for (var i = 0; i < coins.length; i++) {
        for (var j = 0; j <= amount; j++) {
            var currentCoinCount = Math.floor(j / coins[i]);
            if (currentCoinCount == 0) {
                if (i > 0)
                    dpArray[i][j] = dpArray[i - 1][j];
            }
            else {
                var remaining = j % coins[i];

                if (remaining === 0) {
                    dpArray[i][j] = currentCoinCount;
                }

                else if (dpArray[i][remaining] !== 0)
                    dpArray[i][j] = currentCoinCount + dpArray[i][remaining];
            }
        }
    }
};

var buildArray = function (coins, amount) {
    sort(coins);
    var dpArray = [];
    for (var i = 0; i < coins.length; i++) {
        dpArray[i] = [];
        for (var j = 0; j <= amount; j++) {
            dpArray[i][j] = 0;
        }
    }
    return dpArray;
};

var sort = function (coins) {
    for (var i = 1; i < coins.length; i++) {
        for (var j = i; j > 0; j--) {
            if (coins[j] < coins[j - 1]) {
                var temp = coins[j];
                coins[j] = coins[j - 1];
                coins[j - 1] = temp;
            }
            else {
                break;
            }
        }
    }
};