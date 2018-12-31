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

int** Matrix :: MultiplyUsingStraussensMethod(int* m1, int* m2, int m1rows, int m1columns, int m2rows, int m2columns){
     return Multiply2X2Matrix(m1, m2);
 }

int** Matrix :: Multiply2X2Matrix(int* m1, int* m2){
   int a = GetValueFrom2DArray(m1, 0, 0, 2), b = GetValueFrom2DArray(m1, 0, 1, 2),
    c = GetValueFrom2DArray(m1, 1, 0, 2), d = GetValueFrom2DArray(m1, 1, 1, 2),
    e = GetValueFrom2DArray(m2, 0, 0, 2), f=GetValueFrom2DArray(m2, 0, 1, 2),
    g = GetValueFrom2DArray(m2, 1, 0, 2), h = GetValueFrom2DArray(m2,1, 1, 2);

      int p1= a * (f-h);
      int p2 = h * (a + b);
      int p3 = e * (c + d);
      int p4 = d * (g - e);
      int p5 = (a + d) * (e + h);
      int p6 = (b - d) * (g + h);
      int p7 = (a - c) * (e + f);

      return GenerateResultMatrixFromStraussensMethod(p1, p2, p3, p4, p5, p6, p7);

}

int** Matrix :: GenerateResultMatrixFromStraussensMethod(int p1, int p2, int p3, int p4, int p5, int p6, int p7){
  int** result = new int*[2]; 
  result[0] = new int[2] { p6 + p5 + p4 - p2,  p1 + p2};
  result[1] = new int[2]{ p3 + p4, p1 + p5 - p3 - p7}; 
  return result;
}