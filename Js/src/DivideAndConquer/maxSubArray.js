'use strict';

const crossSectionMax = function(arr, leftEndIndex, rightStartIndex){

 let sum = 0;
for(let i = leftEndIndex + 1; i < rightStartIndex; i++){
  sum += arr[i];
}
   return {maxValue: sum, startIndex:  leftEndIndex + 1, endIndex: rightStartIndex - 1};
}

const calculateMaxSubArray = function(arr, startIndex, endIndex){
   
    if(startIndex == endIndex)
    return {maxValue:arr[startIndex], startIndex: startIndex, endIndex : endIndex };

    if(startIndex + 1 === endIndex){
        let max = arr[startIndex];

        if(max + arr[endIndex] > max)
          return {maxValue:max + arr[endIndex], startIndex: startIndex, endIndex : endIndex }

          return arr[endIndex] > max ? {maxValue : arr[endIndex], startIndex: endIndex, endIndex: endIndex}:
          {maxValue: max, startIndex: startIndex, endIndex: startIndex};
    }
         
          const mid = (endIndex + startIndex + 1)/2;
          let midRounded = Math.round(mid);
           midRounded = midRounded > mid ? midRounded -1 : midRounded;

          //left
          let maxLeftArray = calculateMaxSubArray(arr,startIndex, midRounded -1);

          //right
          let maxRightArray = calculateMaxSubArray(arr, midRounded + 1, endIndex);


          //mid array
          let crossSectionMaxArray = crossSectionMax(arr, maxLeftArray.endIndex, maxRightArray.startIndex);

          return calculateMaxSumOfMaxArray(maxLeftArray, maxRightArray, crossSectionMaxArray, startIndex, endIndex);
          
    }

    const calculateMaxSumOfMaxArray = function(maxLeftArray, maxRightArray, crossSectionMaxArray, startIndex, endIndex){
        var totalSum = maxLeftArray.maxValue + maxRightArray.maxValue + crossSectionMaxArray.maxValue;         
    
          
          if(maxLeftArray.maxValue >= maxRightArray.maxValue && maxLeftArray.maxValue >= crossSectionMaxArray.maxValue){
              let sumOfSideArrays = maxLeftArray.maxValue + crossSectionMaxArray.maxValue;

           if(sumOfSideArrays > totalSum && sumOfSideArrays > maxLeftArray.maxValue)
             return {maxValue: sumOfSideArrays, startIndex: maxLeftArray.startIndex, endIndex: crossSectionMaxArray.endIndex};
          
             if(maxLeftArray.maxValue > totalSum)
             return maxLeftArray;
          }

          if(maxRightArray.maxValue >= maxLeftArray.maxValue && maxRightArray.maxValue >= crossSectionMaxArray.maxValue){
             let sumOfSideArrays = maxRightArray.maxValue + crossSectionMaxArray.maxValue;

          if(sumOfSideArrays > totalSum && sumOfSideArrays > maxRightArray.maxValue)
            return {maxValue: sumOfSideArrays, startIndex: crossSectionMaxArray.startIndex, endIndex: maxRightArray.endIndex};
         
            if(maxRightArray.maxValue > totalSum)
            return maxRightArray;
         }
               

          if(crossSectionMaxArray.maxValue >= maxLeftArray.maxValue && crossSectionMaxArray.maxValue >= maxRightArray.maxValue){
             let sumOfLeftSideArrays = crossSectionMaxArray.maxValue + maxLeftArray.maxValue;
            if(sumOfLeftSideArrays > totalSum && sumOfLeftSideArrays > crossSectionMaxArray.maxValue){
                return {maxValue: sumOfLeftSideArrays, startIndex: maxLeftArray.startIndex, endIndex: crossSectionMaxArray.endIndex};    
            }
            
            let sumOfRightSideArrays = crossSectionMaxArray.maxValue + maxRightArray.maxValue;
            if(sumOfRightSideArrays > totalSum && sumOfRightSideArrays > crossSectionMaxArray.maxValue){
                return {maxValue: sumOfRightSideArrays, startIndex: crossSectionMaxArray.startIndex, endIndex: maxRightArray.endIndex};    
            }

            if(crossSectionMaxArray.maxValue > totalSum)
            return crossSectionMaxArray;
          }

          return {maxValue: totalSum, startIndex: maxLeftArray.startIndex, endIndex: maxRightArray.endIndex};
    }

    module.exports = {
        calculateMaxSubArray : calculateMaxSubArray
    };