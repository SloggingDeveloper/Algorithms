(function(){

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

module.exports = combination;    
})();