#include "BubbleSort.h"

BubbleSort :: BubbleSort(){

}

void BubbleSort :: Sort(int arr[], int size){
  for(int i = size; i > 0; i--){
      for(int j=0; j < i; j++){
           if(arr[j] > arr[j+1]){
               int temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp;
           }
      }
  }
}

void BubbleSort :: Process(int arr[], int size){
    Sort(arr, size);
}