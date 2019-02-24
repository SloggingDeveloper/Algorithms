'use strict';

const heap = require('./heap');
const quickSort = require('./quickSort');

console.log('heapsort ' + heap.sort([14,3,8,6,9,1,22, 11]));
console.log('quicksort ' + quickSort.sort([14,3,8,6,9,1,22, 11], 0, 7));
console.log('quicksort randomized ' + quickSort.sort([14,3,8,6,9,1,22, 11], 0, 7));