(function () {
    'use strict';
    //2d dynamic programming - dynamic programming is all about transition function
    // arr[i][j] =s[i] === s[j] && arr[i+1][j-1]
    const getLongestPalindrome = function (input) {
        const arr = intialize2DMatrix(input);
        console.log(arr);
        
        for(let i = 0; i< arr.length; i++){
            for(let j = arr.length - 1; j >  i; j--){
               if(arr[i][j] && isPalindrome(i+1,j-1,arr))
                 return input.slice(i,j+1);
            }
        }

       return input[0];
    };

    const isPalindrome = function(startIndex, endIndex, arr){
        if((startIndex + 1 === endIndex && arr[startIndex][endIndex]) || startIndex === endIndex)
          return true;
        
          return arr[startIndex][endIndex] && isPalindrome(startIndex + 1, endIndex -1, arr);
    }

    const intialize2DMatrix = function (input) {
        const arr = [];

        
        for (let i = 0; i < input.length; i++) {
            arr[i] = [];
            for (let j = 0; j < input.length; j++) {
                if (i === j) {
                    arr[i][j] = true;
                    continue;
                }

                if (input[i] === input[j])
                    arr[i][j] = true;
                else
                    arr[i][j] = false;

            }
        }
        return arr;
    };
    module.exports = getLongestPalindrome;

})();