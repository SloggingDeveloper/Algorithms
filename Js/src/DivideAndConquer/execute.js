'use strict';

const array = require('./maxSubArray.js');

//max sub array
var arr = [-2,-9,-2,1,-4];
console.log('finding max sub array');
console.log(arr);
const result =array.calculateMaxSubArray(arr, 0, 4);
console.log(result);