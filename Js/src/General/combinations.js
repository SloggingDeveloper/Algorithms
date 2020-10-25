(function () {

    function findAllCombinations(n, k) {

        var allCombinations = [];
        getCombinationsRecursively(n,k,[], allCombinations, null);
        return allCombinations;
    }

    var getCombinationsRecursively = function (n, k, currentCombinations, allCombinations, currentNumber) {
       

        if(currentNumber != null)
           currentCombinations.push(currentNumber);
        else  
         currentNumber = 0;

         if (currentCombinations.length == k)
            return currentCombinations;           

        for (var item = currentNumber+ 1; item <= n; item++) {            
            var result = getCombinationsRecursively(n, k, [].concat(currentCombinations),allCombinations, item);
            if (result)
                allCombinations.push(result);
        }

        return null;
    }

    module.exports = findAllCombinations;
})();