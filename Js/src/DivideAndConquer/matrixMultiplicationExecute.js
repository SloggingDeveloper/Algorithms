'use strict';

const strassensMatrix = require('./strassensAlgorithm.js'),
matrix = require('./matrix.js');


// Matrix multiplication
let m1 = [[1, 2], [1, 2], [1, 2]];
let m2 = [[1, 2], [1, 2]];

console.log('currently multiplying: ');

console.log(matrix.format(m1));
console.log(matrix.format(m2));
console.log('result:');
console.log(matrix.format(strassensMatrix.multiply(m1, m2)));