(function () {
        function findAllCombinations(numbers, sum, index) {
        var result = [];
        for (var i = index; i < numbers.length; i++) {
            if (numbers[i] === sum){
                result.push([numbers[i]]);
            }

            else if (sum - numbers[i] > 0) {                
                var combinations = findAllCombinations(numbers, sum - numbers[i], i);
                if (combinations !== null && combinations.length > 0) {

                    for(var combination of combinations)
                    if (numbers[i] <= combination[0]) {
                        result.push([numbers[i]].concat(combination));
                    }
                    else {
                        result.push(combination.concat(numbers[i]));
                    }
                }                
            }           
        }

        if(result.length > 0)
          return result;
       
          return null;
    }

    function getAllCombinations(numbers, sum){
       sort(numbers);
       return findAllCombinations(numbers, sum, 0);
    }

    function sort(numbers){
       for(var i = 1; i < numbers.length; i++){
           for(j=i; j >0;j--){
               if(numbers[j] < numbers[j-1]){
                   var temp = numbers[j];
                   numbers[j]= numbers[j-1];
                   numbers[j-1] = temp;
               }
           }
       }
    }

    module.exports = getAllCombinations;
})();