#include "stdio.h"
#include <iostream>

int main(int argsc, char * argc[]){
   int* p;
   char end;
   int* arrp[2];
   int arr[2][2];
   arr[0][0] = 1;
   arr[0][1] = 2;
   std::cout << " first address " << arr << " value " << *((*arr) + 1) << " same as  " << arr[0][1];
   std :: cin >> end;
    return 0;
}