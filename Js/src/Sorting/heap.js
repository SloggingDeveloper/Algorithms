'use strict';

(function(){

const getLeftChildIndex = function(inputArr, index){
   
    let leftChildIndex = 2*index + 1; // index is 0 zero bases for non zero based : 2*index
    return leftChildIndex >= inputArr.length ? -1 : leftChildIndex; 
};

const getRightChildIndex = function(inputArr, index){
    let rightChildIndex = 2*(index + 1); // index is 0 zero bases for non zero based : 2*index + 1
    return rightChildIndex >= inputArr.length ? -1 : rightChildIndex; 
};

const heapify = function(inputArr, index){
    let inputArrLength = (inputArr || {}).length;
 
  if(isNaN(inputArrLength) || inputArrLength < 1 || isNaN(index) || index < 0 || index >= inputArrLength)
    return inputArr;
  
   let [maxElement, maxIndex, leftChildIndex, rightChildIndex] = 
   [inputArr[index], index, getLeftChildIndex(inputArr, index), getRightChildIndex(inputArr, index)];  
       
 
    if(leftChildIndex > -1 && maxElement < inputArr[leftChildIndex]){
        maxElement = inputArr[leftChildIndex];
        maxIndex = leftChildIndex;
    }

    if(rightChildIndex > -1 && maxElement < inputArr[rightChildIndex]){
        maxElement = inputArr[rightChildIndex];
        maxIndex = rightChildIndex;
    }

    if(index == maxIndex){
       return inputArr;
    }

    let temp = inputArr[index];
    inputArr[index] = maxElement;
    inputArr[maxIndex] = temp;
    
    return heapify(inputArr, maxIndex);

}; 

const buildMaxHeap = function(inputArr){
for(let i = Math.ceil(inputArr.length/2) -1; i > -1; i--){
    heapify(inputArr, i)
}
  return inputArr;
};    

module.exports = {heapify, buildMaxHeap};
})();