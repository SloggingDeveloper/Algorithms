(function () {
    'use strict';

    const findMinJump = function (arr) {
        let jumpCount = 0;
        let maxIndex = 0;
        let startIndex = 0;
        let endIndex = 0;

        while (startIndex <= endIndex) {            
            for (let i = startIndex; i <= endIndex; i++) {
                let jumpedIndex = arr[i] + i;

                if(jumpedIndex >= (arr.length-1)){
                    if(i === 0) return 0;
                 return jumpCount + 1;
                }
                 
                 if(jumpedIndex > maxIndex){
                    maxIndex = jumpedIndex;
                 }
            }
            jumpCount++;
            startIndex = endIndex + 1;
            endIndex = maxIndex;
        }

        return -1;
    };

    module.exports = findMinJump;
})();