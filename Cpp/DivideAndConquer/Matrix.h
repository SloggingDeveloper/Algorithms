#ifndef Matrix_h
#define Matrix_h

class Matrix{
   public:
   Matrix();   
   int** Multiply(int* m1, int* m2, int m1rows, int m1columns, int m2rows, int m2columns);
   void Print(int** arr, int rows, int columns);

   private:
   int GetValueFrom2DArray(int* arr, int i, int j, int numberOfColumns);

};

#endif