'use strict';

const array = require('./maxSubArray.js');

//max sub array
var arr = [-1,2,3,3,-1];
console.log('finding max sub array');
console.log(arr);
const result =array.calculateMaxSubArray(arr, 0, arr.length - 1);
console.log(result);