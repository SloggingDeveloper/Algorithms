#include "MaxSubArray.h"

MaxSubArrayData ::MaxSubArrayData(int maxValue, int startIndex, int endIndex)
{
    _maxValue = maxValue;
    _startIndex = startIndex;
    _endIndex = endIndex;
}

int MaxSubArrayData ::GetMaxValue()
{
    return _maxValue;
}

int MaxSubArrayData ::GetStartIndex()
{
    return _startIndex;
}

int MaxSubArrayData ::GetEndIndex()
{
    return _endIndex;
}

MaxSubArray ::MaxSubArray()
{
}

MaxSubArrayData MaxSubArray ::CrossSectionMax(int arr[], int leftEndIndex, int rightStartIndex)
{

    int sum = 0;
    for (int i = leftEndIndex + 1; i < rightStartIndex; i++)
    {
        sum += arr[i];
    }
    return MaxSubArrayData(sum, leftEndIndex + 1, rightStartIndex - 1);
}

MaxSubArrayData MaxSubArray ::CalculateMaxSumOfMaxArray(MaxSubArrayData maxLeftArray, MaxSubArrayData maxRightArray, MaxSubArrayData crossSectionArray, int startIndex, int endIndex)
{
    int totalSum = maxLeftArray.GetMaxValue() + maxRightArray.GetMaxValue() + crossSectionArray.GetMaxValue();

    if (maxLeftArray.GetMaxValue() >= maxRightArray.GetMaxValue() && maxLeftArray.GetMaxValue() >= crossSectionArray.GetMaxValue())
    {
        int sumOfSideArrays = maxLeftArray.GetMaxValue() + crossSectionArray.GetMaxValue();

        if (sumOfSideArrays > totalSum && sumOfSideArrays > maxLeftArray.GetMaxValue())
            return MaxSubArrayData(sumOfSideArrays, maxLeftArray.GetStartIndex(), crossSectionArray.GetEndIndex());

        if (maxLeftArray.GetMaxValue() > totalSum)
            return maxLeftArray;
    }

    if (maxRightArray.GetMaxValue() >= maxLeftArray.GetMaxValue() && maxRightArray.GetMaxValue() >= crossSectionArray.GetMaxValue())
    {
        int sumOfSideArrays = maxRightArray.GetMaxValue() + crossSectionArray.GetMaxValue();

        if (sumOfSideArrays > totalSum && sumOfSideArrays > maxRightArray.GetMaxValue())
            return MaxSubArrayData(sumOfSideArrays, crossSectionArray.GetStartIndex(), maxRightArray.GetEndIndex());

        if (maxRightArray.GetMaxValue() > totalSum)
            return maxRightArray;
    }

    if (crossSectionArray.GetMaxValue() >= maxLeftArray.GetMaxValue() && crossSectionArray.GetMaxValue() >= maxRightArray.GetMaxValue())
    {
        int sumOfLeftSideArrays = crossSectionArray.GetMaxValue() + maxLeftArray.GetMaxValue();

        if (sumOfLeftSideArrays > totalSum && sumOfLeftSideArrays > crossSectionArray.GetMaxValue())
            return MaxSubArrayData(sumOfLeftSideArrays, maxLeftArray.GetStartIndex(), crossSectionArray.GetEndIndex());

        int sumOfRightSideArrays = crossSectionArray.GetMaxValue() + maxRightArray.GetMaxValue();
        if (sumOfRightSideArrays > totalSum && sumOfRightSideArrays > crossSectionArray.GetMaxValue())
            return MaxSubArrayData(sumOfRightSideArrays, crossSectionArray.GetStartIndex(), maxRightArray.GetEndIndex());

        if (crossSectionArray.GetMaxValue() > totalSum)
            return crossSectionArray;
    }

    return MaxSubArrayData(totalSum, maxLeftArray.GetStartIndex(), maxRightArray.GetEndIndex());
}

MaxSubArrayData MaxSubArray ::CalculateMaxSubArray(int arr[], int startIndex, int endIndex)
{

    if (startIndex == endIndex)
        return MaxSubArrayData(arr[startIndex], startIndex, endIndex);

    if (startIndex + 1 == endIndex)
    {
        int max = arr[endIndex];
        int indexOfMaxElement = endIndex;
        int indexOfMinElement = startIndex;
        
        if(arr[startIndex] > arr[endIndex]){
         max = arr[startIndex];
         indexOfMaxElement = startIndex;
         indexOfMinElement = endIndex;
        }
       
        if (max + arr[indexOfMinElement] > max)
            return MaxSubArrayData(max + arr[endIndex], startIndex, endIndex);

        return MaxSubArrayData(max, indexOfMaxElement, indexOfMaxElement);
    }

    int midRounded = (endIndex + startIndex + 1) / 2;

    //left
    MaxSubArrayData maxLeftArray = CalculateMaxSubArray(arr, startIndex, midRounded - 1);

    //right
    MaxSubArrayData maxRightArray = CalculateMaxSubArray(arr, midRounded + 1, endIndex);

    //mid array
    MaxSubArrayData crossSectionArray = CrossSectionMax(arr, maxLeftArray.GetEndIndex(), maxRightArray.GetStartIndex());

    return CalculateMaxSumOfMaxArray(maxLeftArray, maxRightArray, crossSectionArray, startIndex, endIndex);
}

