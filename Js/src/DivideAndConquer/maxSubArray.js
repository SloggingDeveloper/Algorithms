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
          let crossSectionArray = crossSectionMax(arr, maxLeftArray.endIndex, maxRightArray.startIndex);

          return calculateMaxSumOfMaxArray(maxLeftArray, maxRightArray, crossSectionArray, startIndex, endIndex);
          
    }

    const calculateMaxSumOfMaxArray = function(maxLeftArray, maxRightArray, crossSectionArray, startIndex, endIndex){
        var totalSum = maxLeftArray.maxValue + maxRightArray.maxValue + crossSectionArray.maxValue;         
    
          
          if(maxLeftArray.maxValue >= maxRightArray.maxValue && maxLeftArray.maxValue >= crossSectionArray.maxValue){
              let sumOfSideArrays = maxLeftArray.maxValue + crossSectionArray.maxValue;

           if(sumOfSideArrays > totalSum && sumOfSideArrays > maxLeftArray.maxValue)
             return {maxValue: sumOfSideArrays, startIndex: maxLeftArray.startIndex, endIndex: crossSectionArray.endIndex};
          
             if(maxLeftArray.maxValue > totalSum)
             return maxLeftArray;
          }

          if(maxRightArray.maxValue >= maxLeftArray.maxValue && maxRightArray.maxValue >= crossSectionArray.maxValue){
             let sumOfSideArrays = maxRightArray.maxValue + crossSectionArray.maxValue;

          if(sumOfSideArrays > totalSum && sumOfSideArrays > maxRightArray.maxValue)
            return {maxValue: sumOfSideArrays, startIndex: crossSectionArray.startIndex, endIndex: maxRightArray.endIndex};
         
            if(maxRightArray.maxValue > totalSum)
            return maxRightArray;
         }
               

          if(crossSectionArray.maxValue >= maxLeftArray.maxValue && crossSectionArray.maxValue >= maxRightArray.maxValue){
             let sumOfLeftSideArrays = crossSectionArray.maxValue + maxLeftArray.maxValue;
            if(sumOfLeftSideArrays > totalSum && sumOfLeftSideArrays > crossSectionArray.maxValue){
                return {maxValue: sumOfLeftSideArrays, startIndex: maxLeftArray.startIndex, endIndex: crossSectionArray.endIndex};    
            }
            
            let sumOfRightSideArrays = crossSectionArray.maxValue + maxRightArray.maxValue;
            if(sumOfRightSideArrays > totalSum && sumOfRightSideArrays > crossSectionArray.maxValue){
                return {maxValue: sumOfRightSideArrays, startIndex: crossSectionArray.startIndex, endIndex: maxRightArray.endIndex};    
            }

            if(crossSectionMax.maxValue > totalSum)
            return crossSectionArray;
          }

          return {maxValue: totalSum, startIndex: startIndex, endIndex: endIndex};
    }

    module.exports = {
        calculateMaxSubArray : calculateMaxSubArray
    };