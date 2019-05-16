'use strict';


(function(){
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var numsLength = nums.length;
    for(var i = 0; i < numsLength-1; i++){
        var index = findIndex(nums, target - nums[i], i + 1, numsLength)
        if(index !== -1){
            return [i, index];
        }
    }
    return [-1, -1];
};

var findIndex = function(nums, target, startIndex, endIndex){
  
  for(var i = startIndex; i <= endIndex; i++){
      if(nums[i] === target){
          return i
      }
  }
    return -1;
};

module.exports = twoSum;
})();