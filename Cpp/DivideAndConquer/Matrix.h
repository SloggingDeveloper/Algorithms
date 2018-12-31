#ifndef Matrix_h
#define Matrix_h

class Matrix{
   public:
   Matrix();   
   int** Multiply(int* m1, int* m2, int m1rows, int m1columns, int m2rows, int m2columns);
   void Print(int** arr, int rows, int columns);
   int** MultiplyUsingStraussensMethod(int* m1, int* m2, int m1rows, int m1columns, int m2rows, int m2columns);

   private:
   int GetValueFrom2DArray(int* arr, int i, int j, int numberOfColumns);
   int** Multiply2X2Matrix(int* m1, int* m2);
   int** GenerateResultMatrixFromStraussensMethod(int p1, int p2, int p3, int p4, int p5, int p6, int p7);
};

#endif