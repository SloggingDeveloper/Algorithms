#include "InsertionSort.h"

InsertionSort :: InsertionSort(){

}

void InsertionSort :: Process(int arr[], int size){
 Sort(arr, size);
}

void InsertionSort :: Sort(int arr[], int size){
for(int j = 1; j < size; j++){
        int k = j-1;       
        while(k > -1 && arr[k+1] < arr[k]){
            int temp = arr[k];
            arr[k] = arr[k+1];
            arr[k+1] = temp;
            k--;
        }
    }
}