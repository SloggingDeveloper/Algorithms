'use strict';

(function(){
const crossSectionMax = function(arr, leftEndIndex, rightStartIndex){
 let sum = 0;

for(let i = leftEndIndex + 1; i < rightStartIndex; i++){
  sum += arr[i];
}

   return {maxValue: sum,
     startIndex: leftEndIndex + 1,
     endIndex: rightStartIndex - 1};
};

const calculateMaxSumOfMaxArray = function(maxLeftArray, maxRightArray, crossSectionMaxArray){
    let totalSum = maxLeftArray.maxValue + maxRightArray.maxValue +
    crossSectionMaxArray.maxValue;

      if(maxLeftArray.maxValue >= maxRightArray.maxValue &&
        maxLeftArray.maxValue >= crossSectionMaxArray.maxValue){
          let sumOfSideArrays = maxLeftArray.maxValue + crossSectionMaxArray.maxValue;

       if(sumOfSideArrays > totalSum && sumOfSideArrays > maxLeftArray.maxValue){
         return {maxValue: sumOfSideArrays,
             startIndex: maxLeftArray.startIndex,
              endIndex: crossSectionMaxArray.endIndex};
         }

         if(maxLeftArray.maxValue > totalSum){
         return maxLeftArray;
         }
      }

      if(maxRightArray.maxValue >= maxLeftArray.maxValue &&
        maxRightArray.maxValue >= crossSectionMaxArray.maxValue){
         let sumOfSideArrays = maxRightArray.maxValue + crossSectionMaxArray.maxValue;

         if(sumOfSideArrays > totalSum && sumOfSideArrays > maxRightArray.maxValue){
            return {maxValue: sumOfSideArrays, startIndex: crossSectionMaxArray.startIndex, endIndex: maxRightArray.endIndex};
        }

        if(maxRightArray.maxValue > totalSum){
            return maxRightArray;
      }
     }

      if(crossSectionMaxArray.maxValue >= maxLeftArray.maxValue &&
        crossSectionMaxArray.maxValue >= maxRightArray.maxValue){
         let sumOfLeftSideArrays = crossSectionMaxArray.maxValue + maxLeftArray.maxValue;

        if(sumOfLeftSideArrays > totalSum && sumOfLeftSideArrays > crossSectionMaxArray.maxValue){
            return {maxValue: sumOfLeftSideArrays,
                startIndex: maxLeftArray.startIndex,
                endIndex: crossSectionMaxArray.endIndex};
        }

        let sumOfRightSideArrays = crossSectionMaxArray.maxValue + maxRightArray.maxValue;

        if(sumOfRightSideArrays > totalSum && sumOfRightSideArrays > crossSectionMaxArray.maxValue){
            return {maxValue: sumOfRightSideArrays, startIndex: crossSectionMaxArray.startIndex, endIndex: maxRightArray.endIndex};
        }

        if(crossSectionMaxArray.maxValue > totalSum){
        return crossSectionMaxArray;
        }
      }

      return {maxValue: totalSum, startIndex: maxLeftArray.startIndex, endIndex: maxRightArray.endIndex};
};

const calculateMaxSubArray = function(arr, startIndex, endIndex){
    if(startIndex === endIndex){
        return {maxValue:arr[startIndex], startIndex, endIndex};
    }

    if (startIndex + 1 === endIndex){
        let max = arr[endIndex];
        let indexOfMaxElement = endIndex, indexOfMinElement = startIndex;

        if(arr[startIndex] > arr[endIndex]){
         max = arr[startIndex];
         indexOfMaxElement = startIndex;
         indexOfMinElement = endIndex;
        }

        if (max + arr[indexOfMinElement] > max){
            return {maxValue: max + arr[endIndex], startIndex, endIndex};
        }

        return {maxValue: max, startIndex: indexOfMaxElement, endIndex : indexOfMaxElement};
    }
          const mid = (endIndex + startIndex + 1) / 2;
          let midRounded = Math.round(mid);

          midRounded = midRounded > mid
           ? midRounded - 1
           : midRounded;

          // Left
          let maxLeftArray = calculateMaxSubArray(arr, startIndex, midRounded - 1),

          // Right
          maxRightArray = calculateMaxSubArray(arr, midRounded + 1, endIndex),

          // Mid array
          crossSectionMaxArray = crossSectionMax(arr, maxLeftArray.endIndex, maxRightArray.startIndex);

          return calculateMaxSumOfMaxArray(maxLeftArray, maxRightArray, crossSectionMaxArray, startIndex, endIndex);
    };

    module.exports = {calculateMaxSubArray};
}());