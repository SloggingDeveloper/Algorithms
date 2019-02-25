'use strict';

const heap = require('./heap');
const quickSort = require('./quickSort');
const countingSort = require('./counting');
const radix = require('./radix');
// console.log('heapsort ' + heap.sort([14,3,8,6,9,1,22, 11]));
// console.log('quicksort ' + quickSort.sort([14,3,8,6,9,1,22, 11], 0, 7));
// console.log('quicksort randomized ' + quickSort.sort([14,3,8,6,9,1,22, 11], 0, 7));

// let result = countingSort.sort([14,3,22,8,6,9,9,1,22, 11]);
// console.log(result);

console.log('radix: ' + radix.sort([11, 123, 760, 511]));