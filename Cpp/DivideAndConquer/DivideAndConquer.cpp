#include "conio.h"
#include <iostream>
#include "MaxSubArray.cpp"

int main(int argc, char const *argv[])
{
    int arr[9] = {-2,-9,-2, 4, 1, 2, 1,-4,-1};
    std :: cout << "finding max in [-2,-9,-2, 4, 1, 2, 1,-4,-1]" << "\n";
    
     MaxSubArray maxSubArray;

     MaxSubArrayData data = maxSubArray.CalculateMaxSubArray(arr, 0, (sizeof(arr)/sizeof(arr[0])) - 1);

     std :: cout << "MaxValue:" << data.GetMaxValue() << " startIndex:" << data.GetStartIndex() << " endIndex:" << data.GetEndIndex() << "\n";
     std :: cout << "press and key to exit..." << "\n";
     getchar();
     return 0;
} 
