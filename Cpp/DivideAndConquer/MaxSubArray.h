#ifndef MaxSubArray_h
#define MaxSubArray_h

class MaxSubArrayData{
    public:
    MaxSubArrayData(int maxValue, int startIndex, int endIndex);
    int GetMaxValue();
    int GetStartIndex();
    int GetEndIndex();

    private:
    int _maxValue;
    int _startIndex;
    int _endIndex;
};

class MaxSubArray {
    public:
    MaxSubArray();
    MaxSubArrayData CalculateMaxSubArray(int arr[], int startIndex, int endIndex);

    private:
    MaxSubArrayData CrossSectionMax(int arr[], int leftEndIndex, int rightStartIndex);
    MaxSubArrayData CalculateMaxSumOfMaxArray(MaxSubArrayData maxLeftArray, MaxSubArrayData maxRightArray, MaxSubArrayData crossSectionArray, int startIndex, int endIndex);
    
};

#endif