/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    return findMedian(nums1, nums2);   
    
};

var findMedian = function(nums1, nums2){

    if(nums1.length === 0)
       return getMedian(nums2);;
    if(nums2.length === 0)
      return getMedian(nums1);

    var nums1Median =  getMedian(nums1);
    var nums2Median = getMedian(nums2);
    
    if(nums1Median > nums2Median ){
        return calculateMedian(nums1, nums2);
    }

    if(nums2Median > nums1Median){
        return calculateMedian(nums2, nums1);
    }

    return nums1Median;
    
};

var calculateMedian = function(nums1whichHasHighMedian, nums2WhichHasLowMedian){
    var nums1lengthbeforeMedian  = numberOfElementsBeforeMedian(nums1whichHasHighMedian.length);
    var nums2LengthBeforenums1Median = findNumberOfElementsLessThanMedian(nums2WhichHasLowMedian, nums1whichHasHighMedian[nums1lengthbeforeMedian - 1]);
    
    var virtualMedianIndex = numberOfElementsBeforeMedian(nums1whichHasHighMedian.length + nums2WhichHasLowMedian.length);
        
    
    return findAfterMergingElements(nums1whichHasHighMedian, nums2WhichHasLowMedian,
       nums1lengthbeforeMedian, nums2LengthBeforenums1Median, virtualMedianIndex);

};

var isMedianAverageOfTwoConsecutiveNumbers = function(length){
   return Math.floor(length/2) === (length/2);
};

var findAfterMergingElements = function(nums1, nums2,
     nums1EndIndex, nums2EndIndex, virtualIndex){
     var shouldConsiderTwoNumbersForMedian = isMedianAverageOfTwoConsecutiveNumbers(nums1.length + nums2.length);
        if(nums2[nums2EndIndex - 1] <= nums1[0]){
            if(virtualIndex <= nums2EndIndex){
                if(shouldConsiderTwoNumbersForMedian)
                return (nums2[virtualIndex - 1] +  nums2[virtualIndex-2])/2;
                else
                return nums2[virtualIndex - 1]
            }
            
             if(virtualIndex === nums2EndIndex + 1)
             {
                if(shouldConsiderTwoNumbersForMedian)
                return (nums2[virtualIndex - 2] +  nums1[0])/2;
                else
                return nums1[0];
             }

             if(shouldConsiderTwoNumbersForMedian)
              return (nums1[virtualIndex - nums2EndIndex - 1]  + nums1[virtualIndex - nums2EndIndex -2])/2;

              return nums1[virtualIndex - nums2EndIndex - 1];
        }

        var nums1MidIndexfromStartToMedian =  nums1EndIndex;
        var foundPlaceToMergeNums2  = false;
        var nums1StartIndex = 1;
        nums1MidIndexfromStartToMedian = nums1MidIndexfromStartToMedian == nums1StartIndex ? nums1MidIndexfromStartToMedian + 1 : nums1MidIndexfromStartToMedian;
        var nums1EndIndexWhileMatching  = nums1EndIndex;
        while(!foundPlaceToMergeNums2){

            if(nums1StartIndex === nums1MidIndexfromStartToMedian){
            foundPlaceToMergeNums2 = true;
            break;
            }

            if(nums1[nums1MidIndexfromStartToMedian-1] < nums2[nums2EndIndex - 1]){
                nums1StartIndex = nums1MidIndexfromStartToMedian;
                nums1EndIndexWhileMatching = nums1EndIndexWhileMatching;
                nums1MidIndexfromStartToMedian = nums1StartIndex + Math.floor((nums1EndIndexWhileMatching - nums1StartIndex)/2);
                             
            }
            else if(nums1[nums1MidIndexfromStartToMedian-1] > nums2[nums2EndIndex - 1]){
                if(nums1[nums1MidIndexfromStartToMedian-2] < nums2[nums2EndIndex - 1]){
                    foundPlaceToMergeNums2 = true;
                    break;
                }
                
                nums1StartIndex = nums1StartIndex;
                nums1EndIndexWhileMatching = nums1MidIndexfromStartToMedian;
                nums1MidIndexfromStartToMedian =nums1StartIndex + Math.floor((nums1EndIndexWhileMatching - nums1StartIndex)/2);
            }
             else
            foundPlaceToMergeNums2 = true;
        }

           var placeBeforeWhichnums2CanBeInsertedInNums1 = nums1MidIndexfromStartToMedian;            
           
        
        var mergedHalf = [];
        mergedHalfLength = placeBeforeWhichnums2CanBeInsertedInNums1 + nums2EndIndex;        

        mergedHalf[mergedHalfLength - 1] = nums1[placeBeforeWhichnums2CanBeInsertedInNums1 - 1]        
       
        var currentIndexInNums2 = nums2EndIndex;
        var currentIndexInNums1 = placeBeforeWhichnums2CanBeInsertedInNums1 - 1;
        for(var i = mergedHalfLength - 2; i >= 0; i--){           
           

            if(currentIndexInNums1 > 0 && currentIndexInNums2 > 0){
                 if(nums1[currentIndexInNums1 - 1] >= nums2[currentIndexInNums2-1]){
                     mergedHalf[i] = nums1[currentIndexInNums1 - 1];
                     currentIndexInNums1--;
                 }
                 else{
                    mergedHalf[i] = nums2[currentIndexInNums2 - 1];
                    currentIndexInNums2--;
                 }
                 
            }

            else if(currentIndexInNums1 > 0){
                mergedHalf[i] = nums1[currentIndexInNums1 - 1];
                currentIndexInNums1--;
            }
            else{
                mergedHalf[i] = nums2[currentIndexInNums2 - 1];
                currentIndexInNums2--;
            }    
            
            if(i + 1 === virtualIndex-1){
                if(shouldConsiderTwoNumbersForMedian)
                return (mergedHalf[i] + mergedHalf[i+1])/2;

                return mergedHalf[i + 1];                
            }
        }
         
        if(virtualIndex > mergedHalf.length){
            //lies in nums1
            if(shouldConsiderTwoNumbersForMedian)
            return(nums1[placeBeforeWhichnums2CanBeInsertedInNums1 + virtualIndex - mergedHalfLength - 1] +
            nums1[placeBeforeWhichnums2CanBeInsertedInNums1 + virtualIndex - mergedHalfLength - 2])/2;

            return nums1[placeBeforeWhichnums2CanBeInsertedInNums1 + virtualIndex - mergedHalfLength - 1];
        }

            if(shouldConsiderTwoNumbersForMedian)
            return (mergedHalf[virtualIndex - 1] + mergedHalf[virtualIndex-2])/2;

            return mergedHalf[virtualIndex - 1];                
      
        
};

var getMedian = function(nums){
    var length = nums.length;
    if(Math.floor(length/2) === (length/2)){
        return (nums[(length/2)-1] + nums[(length/2)])/2;
    }
    else
        return nums[Math.floor(length/2)];
    
    };

var numberOfElementsBeforeMedian = function(length){
     if(isMedianAverageOfTwoConsecutiveNumbers(length))
         return length/2 + 1;
    return Math.ceil(length/2)
};

var findNumberOfElementsLessThanMedian = function(nums, mediansToBeCompared){
    if(nums[nums.length-1] <= mediansToBeCompared){
        return nums.length;
    }
    return findIndexWhichUntillNumbersAreLessThanMedian(nums, 1, nums.length, mediansToBeCompared);   
    
};

var findIndexWhichUntillNumbersAreLessThanMedian = function(nums, startIndex, endIndex, medianToBeCompared){
    
    if(startIndex === endIndex)
        return startIndex;
    
    var midPoint = Math.floor((endIndex - startIndex)/2) + startIndex;
    if(nums[midPoint-1] > medianToBeCompared){
        return findIndexWhichUntillNumbersAreLessThanMedian(nums, startIndex, midPoint, medianToBeCompared);
    }
    if(nums[midPoint-1] <= medianToBeCompared && nums[midPoint] <= medianToBeCompared){
        return findIndexWhichUntillNumbersAreLessThanMedian(nums, midPoint, endIndex, medianToBeCompared)
    }
  return midPoint;
};




console.log(findMedianSortedArrays([2],[1,3,4,5,6,7]));