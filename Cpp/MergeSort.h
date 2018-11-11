#ifndef MergeSort_h
#define MergeSort_h


class MergeSort{
  
  public:
     MergeSort();
     void Process(int arr[], int size);
     
  protected:

  private:
  void Sort(int arr[], int firstIndex, int middleIndex, int lastIndex);
  void Combine(int arr[], int l[], int r[], int leftArrSize, int rightArrSize,  int firstIndex, int lastIndex);
};

#endif