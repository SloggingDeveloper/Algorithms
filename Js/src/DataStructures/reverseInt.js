/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var maxSigned32Int = 2147483647;
    var minSigned32Int = -2147483648

    var numString = x.toString();
    var length = numString.length;
    var reverse = "";

    while (length > 1) {
        reverse = reverse + numString[length - 1];
        length--;
    }

    if (isNaN(numString[0])) {
        reverse = numString[0] + reverse;
    }
    else {
        reverse = reverse + numString[0]
    }

    var value = Number.parseInt(reverse);
    if (value > maxSigned32Int || value < minSigned32Int)
        return 0;

    return value;
};