#include "MergeSort.h"
#include <iostream>

MergeSort :: MergeSort()
{

}

void MergeSort :: Combine(int arr[], int l[], int r[], int leftArrSize, int rightArrSize,  int firstIndex, int lastIndex){
    int i = 0;
    int j = 0;
   
    for(int k = firstIndex; k <= lastIndex; k++){

        if(i < leftArrSize && j < rightArrSize)
        {            
            if(l[i] < r[j]){
              arr[k] = l[i];
              i++;
            }
            else{
                arr[k] = r[j];
                j++;
            }

        }

        else if(i < leftArrSize){
             arr[k] = l[i];
              i++;
        }

        else if( j < rightArrSize){
             arr[k] = r[j];
                j++;
        }
    }
 }



 void MergeSort :: Sort(int arr[], int firstIndex, int middleIndex, int lastIndex){
  
   if (firstIndex == middleIndex && lastIndex == middleIndex)
     return;

//    //left sort
      Sort(arr, firstIndex, firstIndex + (middleIndex - firstIndex)/2, middleIndex);

//    //right sort
      Sort(arr, middleIndex + 1, middleIndex + 1 + (lastIndex - middleIndex - 1)/2, lastIndex);

   int leftArrSize = middleIndex - firstIndex + 1;
   int rightArrSize = lastIndex - middleIndex;
   int L[leftArrSize];
   int R[rightArrSize];

    int lastSubIndex = 0;
     for(int i = firstIndex, j= 0; i <=middleIndex; i++, j++){
         L[j] = arr[i];
         lastSubIndex = j;
     }    

     for(int i = middleIndex + 1, j= 0; i <=lastIndex; i++, j++){
         R[j] = arr[i];
         lastSubIndex = j;
     }    

   //combine
    Combine(arr, L, R, leftArrSize, rightArrSize, firstIndex, lastIndex);
}

void MergeSort :: Process(int arr[], int size){
      Sort(arr, 0, (size-1)/2, size-1);
  }
