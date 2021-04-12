(function () {
    'use strict';

    const isPalindrome = function (number) {

        if(number < 0)
         return false;

        let divisor = getDivisor(number);
        console.log("divisor:",divisor);
       
        return  checkPalindromeByDigits(divisor, number);

    };

    const  checkPalindromeByDigits = function(divisor, input){       

        while(input > 0){
            if(input%10 !== Math.floor(input/divisor)){
                return false;
            }

            input = Math.floor((input%divisor)/10);
            divisor = divisor/100;
        }
        return true;
    };

    const getDivisor = function (number) {
      let divisor = 1;
      while(number >= 10){
        divisor *= 10;
          number = Math.floor(number/10);
      }
        return divisor;
    };

    module.exports = isPalindrome;
})();