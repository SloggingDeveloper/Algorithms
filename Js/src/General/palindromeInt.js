/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var number = Number.parseInt(x);
   return checkIfPalindromeWithoutUsingString(number);  
};

// var reverseWithoutUsingString = function (number) {
//     number = Number.parseInt(number)
//     if (number < 0)
//         return null;

//     var result = number;
//     var arr = [];

//     while (result !== 0) {
//         var reminder = result % 10;
//         arr.push(reminder);
//         result = Math.floor((result - reminder) / 10);
//     }

//     var reversedNumber = 0;
//     var power = arr.length - 1;

//     for (i = 0; i < arr.length; i++) {
//         reversedNumber += (arr[i] * Math.pow(10, power--));
//     }

//     return reversedNumber;

// };

var checkIfPalindromeWithoutUsingString = function (number) {    
    if (number < 0)
        return false;

    var result = number;
    var arr = [];

    while (result !== 0) {
        var reminder = result % 10;
        arr.push(reminder);
        result = Math.floor((result - reminder) / 10);
    }

    var midPoint = Math.Ceil(arr.length/2);
    var lastIndex = arr.length-1;
    for (i = 0; i < midPoint-1; i++) {
        if(lastIndex < i)
        return true;

        if(arr[i] !== arr[lastIndex--])
        return false;        
    }

    return reversedNumber;

};


