#include "Matrix.h"
#include <iostream>

Matrix :: Matrix(){}

int** Matrix :: Multiply(int* m1, int* m2, int m1rows, int m1columns, int m2rows, int m2columns){
   auto result = new int*[m1columns];
   for(int i =0; i < m1rows; i++){
       result[i] = new int[m1columns];
   }
    
    for(int i = 0; i < m1rows; i++){
        for(int j=0; j< m2columns; j++){
            result[i][j] = 0;
            for(int k=0; k < m2rows; k++){                
                result[i][j]= result[i][j] + (GetValueFrom2DArray(m1, i, k, m1columns) *  GetValueFrom2DArray(m2, k, j, m2columns));
            }
        }
    }

    return result;
}

void Matrix :: Print(int** arr, int rows, int columns){
  for(int i=0; i < rows; i++){
      for(int j =0; j < columns; j++){
          std:: cout << arr[i][j] << "\t";
      }
      std:: cout << "\n";
  }
}

int  Matrix :: GetValueFrom2DArray(int* arr, int i, int j, int numberOfColumns){
     return *(arr + (i*numberOfColumns) + j);
}