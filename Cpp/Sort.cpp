#include "MergeSort.cpp"
#include "InsertionSort.cpp"
#include "BubbleSort.cpp"
#include "conio.h"
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

    BubbleSort sort;
    sort.Process(arr, n);

     for(int i = 0; i < n; i++){
        std::cout<< arr[i] << "\t";
    }

   std::cout << "\n" << "Press any key to exit" << "\n";
    getch();
    return 0;
}