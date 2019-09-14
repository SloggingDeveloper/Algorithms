/*
[1,2,3]
[]
[1,2]
[1,3]
[2,3]
[1,2,3]
[1],[2],[3]
*/

'use strict';

(function(){

    var findAllSubSets = function(nums){
        var arr = [{set: [], sum: 0}];
       for(var i = 0; i < nums.length;i++){
        var element = {set: [nums[i]], hash : nums[i], sum : nums[i]};   

        if(checkFinalArrayAlreadyContainsTheSet(arr, element.set, {hash: element.hash, sum: element.sum}))
          continue;

        arr.push(element);
        findAllCombinations(element,i+1, nums, arr);
       } 
        
       var mappedArr = [];
       for(var j = 0; j < arr.length; j++){
           mappedArr.push(arr[j].set);
       }
       return mappedArr;
    };

    var findAllCombinations = function(element, index, nums, finalArr){      
          
            for(var i = index; i < nums.length; i++){
                var set = element.set.concat(nums[i]);

                var currentHashValue = getHash(set);
                var finalArrayAlreadyHasSet = checkFinalArrayAlreadyContainsTheSet(finalArr, set, currentHashValue);
                var setValue = {set: set, hash: currentHashValue.hash, sum : currentHashValue.sum};
                if(!finalArrayAlreadyHasSet)
               {
                finalArr.push(setValue);
               }               
               
                findAllCombinations(setValue,i + 1, nums, finalArr);
            }
        };
        checkFinalArrayAlreadyContainsTheSet = function(finalArr, set, currentHashValueForSet){
            var finalArrayAlreadyHasSet = false;
            for(var j = 0 ; j < finalArr.length; j++){
                var hashValue = finalArr[j].hash;
                if(hashValue === undefined)
                continue;
                

                finalArrayAlreadyHasSet = (finalArr[j].set.length ===  set.length) &&
                ((hashValue ^ currentHashValueForSet.hash) === 0) && (currentHashValueForSet.sum === finalArr[j].sum);               
                
                
               
                if(finalArrayAlreadyHasSet){
                    for(var k=0; k < finalArr[j].set.length; k++){
                        if(set.indexOf(finalArr[j].set[k]) === -1)
                         {
                            finalArrayAlreadyHasSet = false;
                            break;
                         }
                    }
                }

                if(finalArrayAlreadyHasSet)
                break;
           }
           return finalArrayAlreadyHasSet;
        };

        var checkFinalArrayAlreadyContainsTheSet1 = function(finalArr, set, currentHashValueForSet){
            var finalArrayAlreadyHasSet = false;
            for(var j = 0 ; j < finalArr.length; j++){
                var hashValue = finalArr[j].hash;
                if(hashValue === undefined)
                continue;
                

                finalArrayAlreadyHasSet = (finalArr[j].set.length ===  set.length) &&
                ((hashValue ^ currentHashValueForSet.hash) === 0) && (currentHashValueForSet.sum === finalArr[j].sum);               
                
               
                if(finalArrayAlreadyHasSet)
                break;
           }
           return finalArrayAlreadyHasSet;
        };
        
        var getHash = function(set){
            var hashValue = 0;
            var sum = 0;
          for(var i = 0; i < set.length; i++){
             hashValue = hashValue^set[i];
             sum = sum + set[i];
          }
          return {hash: hashValue, sum: sum};
        };  
    

    module.exports = findAllSubSets;
}
)();
