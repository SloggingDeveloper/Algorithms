(function(){
'use strict';

const calculateMedian = function(arr1, arr2){

   var arr1Position = Math.ceil(arr1.length/2); //2
   var medianPosition = Math.ceil((arr1.length + arr2.length)/2); //3
   var arr2Position = medianPosition - arr1Position; //1
  return getMedian(arr1, arr1Position, arr2, arr2Position);
};

const getMedian = function(arr1, arr1Position, arr2, arr2Position){
  
   const arr1LR = getLeftAndRightValues(arr1,arr1Position);
    console.log(arr1LR);
 
   const arr2LR = getLeftAndRightValues(arr2,arr2Position);
    console.log(arr2LR);

   if(arr1LR.partition1RightMost <= arr2LR.partition2LeftMost && arr2LR.partition1RightMost <= arr1LR.partition2LeftMost){
     console.log("iam in");
    let leftTerm = arr1LR.partition1RightMost > arr2LR.partition1RightMost ? arr1LR.partition1RightMost : arr2LR.partition1RightMost;
      if((arr1.length + arr2.length)%2 === 0){          
           let rightTerm = arr1LR.partition2LeftMost > arr2LR.partition2LeftMost ? arr2LR.partition2LeftMost : arr1LR.partition2LeftMost;
           return (leftTerm + rightTerm)/2;
      }
      return leftTerm;
   }
   
   if(arr1LR.partition1RightMost > arr2LR.partition2LeftMost)
     return getMedian(arr1, arr1Position - 1, arr2, arr2Position + 1);

     return getMedian(arr1, arr1Position + 1, arr2, arr2Position - 1);

};

const getLeftAndRightValues = function(arr, arrPosition){  
   const partition1RightMost =  arrPosition > 0 && arrPosition <= arr.length ? arr[arrPosition-1]: Number.MIN_VALUE;
   const partition2LeftMost =  arrPosition >= 0 && arrPosition < arr.length ? arr[arrPosition] : Number.MAX_VALUE;
   console.log("HERE", partition1RightMost, partition2LeftMost);
  return {partition1RightMost : partition1RightMost, partition2LeftMost: partition2LeftMost};
}

module.exports = calculateMedian;
})();