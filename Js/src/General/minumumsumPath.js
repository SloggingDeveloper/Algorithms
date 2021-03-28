(function () {
    'use strict';

    const getMinimum = function (twoDArr) {
        let i = twoDArr.length - 1;
        let j = twoDArr[0].length - 1;
        const mem = {};
        return findMinimum(twoDArr, i, j, mem);
    };

    const findMinimum = function (twoDArr, i, j, mem) {

        if (i < 0 || j < 0)
            return null;

        if (typeof mem[`${i}${j}`] !== 'undefined') {
            return mem[`${i}${j}`];
        }
       
        return (mem[`${i}${j}`] = twoDArr[i][j] + findMinimumBetweenTopAndRight(twoDArr, i, j, mem));
    };

    const findMinimumBetweenTopAndRight = function (twoDArr, i, j, mem) {

        let top = findMinimum(twoDArr, i - 1, j, mem);
        if (top !== null)
            mem[`${i - 1}${j}`] = top;

        let left = findMinimum(twoDArr, i, j - 1, mem);
        if (left !== null)
            mem[`${i}${j - 1}`] = left;

        if (top === null && left === null)
            return null;

        if (top === null || left === null)
            return (top === null ? left : top);

        return (top < left ? top : left);
    }

    module.exports = getMinimum;
})();