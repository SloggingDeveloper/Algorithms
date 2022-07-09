const reader = require('../inputReader');
const decodeStr = require('./decodeString');

console.log('enter decodedstr');
let input = '';
reader.onReadInput(function (data) {
    input = data;
});
reader.onInputComplete(function () {    
    console.log(input);
    console.log(decodeStr(input));
});