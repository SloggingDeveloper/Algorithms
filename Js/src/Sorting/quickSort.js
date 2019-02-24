'use strict';

(function(){

    const partition = function(arr, startIndex, endIndex){
    
     let i = startIndex - 1, pivotElement = arr[endIndex];
     
     for(let j = startIndex; j < endIndex; j++){
         if(arr[j] <= pivotElement){
             i = i + 1;
             let temp = arr[j];
             arr[j] = arr[i];
             arr[i] = temp;
         }
        }
         arr[endIndex] = arr[i+1];
         arr[i+1] = pivotElement;
        return i + 1;  
    };
    const random = function(startIndex, endIndex){
        const range = endIndex - startIndex + 1;
        return Math.floor(Math.random() * range);
    }

    const randomized_partition = function(arr, startIndex, endIndex){
        const randomElementPosition = random(startIndex, endIndex);
         const temp = arr[endIndex];
         arr[endIndex] = arr[randomElementPosition];
         arr[randomElementPosition] = temp;

         return partition(arr, startIndex, endIndex);
    }

    const sortWithPartition = function(arr, startIndex, endIndex, partitionMechanism){
        if(startIndex >= endIndex)
        return;

        const partitionKey = partitionMechanism();
        sort(arr, startIndex, partitionKey-1);
        sort(arr, partitionKey + 1, endIndex);

        return arr;
    }

    const sort = function(arr, startIndex, endIndex){    
        return sortWithPartition(arr, startIndex, endIndex,
             () =>{return partition(arr, startIndex, endIndex) } );
    };

    const randomized_sort = function(arr, startIndex, endIndex){
        return sortWithPartition(arr, startIndex, endIndex,
             () => {return randomized_partition(arr, startIndex, endIndex)});
    };

    module.exports = {sort};
})();