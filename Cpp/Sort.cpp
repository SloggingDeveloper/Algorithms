#include "MergeSort.cpp"
#include "InsertionSort.cpp"
#include <iostream>

int main(){
    int n;
    std::cout << "enter number of elements to be sorted" << "\n";

    std::cin >> n;
    int arr[n];
    std::cout << "enter " << n <<" integers to be sorted" << "\n";
    
    for(int i = 0; i < n; i++){
        std::cin >> arr[i];
    }

    InsertionSort sort;
    sort.Process(arr, n);

     for(int i = 0; i < n; i++){
        std::cout<< arr[i] << "\t";
    }

   std::cout << "\n" << "Press any key to exit";
   char input;
    std::cin >> input;
}