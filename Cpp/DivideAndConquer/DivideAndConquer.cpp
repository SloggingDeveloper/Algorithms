#include "conio.h"
#include <iostream>
#include "MaxSubArray.cpp"
#include "Matrix.cpp"

int main(int argc, char const *argv[])
{
    // int arr[5] = {-1,2,3,3,-2};
    // std :: cout << "finding max in [-1,2,3,3,-2]" << "\n";
    
    //  MaxSubArray maxSubArray;

    //  MaxSubArrayData data = maxSubArray.CalculateMaxSubArray(arr, 0, (sizeof(arr)/sizeof(arr[0])) - 1);

    //  std :: cout << "MaxValue:" << data.GetMaxValue() << " startIndex:" << data.GetStartIndex() << " endIndex:" << data.GetEndIndex() << "\n";
    
    int m1[2][2] = {{1,2}, {1,2}};
    int m2[2][2] = {{1,2}, {1,2}};

    Matrix matrix;
   
    matrix.Print(matrix.MultiplyUsingStraussensMethod((int*)m1, (int*)m2, 2,2,2,2), 2, 2);
      std :: cout << "press and key to exit..." << "\n";
     getchar();
     return 0;
} 
