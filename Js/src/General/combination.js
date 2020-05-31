(function(){
    var phonePad = ["","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
    function combination(input, group, ignoreDuplicate){       
        var result = [];
        console.log(group);
        if(group < 1)
        return [''];

        for(var i = 0; i < input.length; i++){
            var copy = input.split('');
            copy.splice(i,1);
            var childCombinations = combination(copy.join(''), group-1);
           
            for(var j =0; j < childCombinations.length; j++){
                var reverseCombined = childCombinations[j] + input[i];
                if(!ignoreDuplicate || result.indexOf(reverseCombined) === -1){               
                   result.push(input[i] + childCombinations[j]);
                }
            }
        }       
        return result;
    }

    function phoneLetterCombination(input){
        var combinations = combination(input, input.length);
        var finalCombinations = [];
        for(var i = 0; i.length < finalCombinations.length; i++){
            var arr = combinations[i].split('');
            var keypad = [];
            for(var j = 0; j < arr.length; j++){
                keypad.push(arr[j])
            }
            finalCombinations.push(phoneLetterPickOneEachFromGroup(keypad, 0,"",[]));
        }  
        return finalCombinations;
    }

    function phoneLetterPickOneEachFromGroup(inputGroup, currentGroupIndex, result, allCombinations){
         if(currentGroupIndex === inputGroup.length)
         return result;

         var split = inputGroup[currentGroupIndex].split('');
         for(var i = 0; i< split.length; i++){           
            allCombinations.push(phoneLetterPickOneEachFromGroup(inputGroup, currentGroupIndex + 1, result+split[i]));
         }
        return allCombinations;
    }



module.exports = combination;    
})();

