const reader = require('../inputReader');
const isCyclic = require('./cyclicGraphDetection');

console.log('input in pairs separated comma');
const input = [];
let target = null;
reader.onReadInput(function (data) {   
    
    let pair = data.split(',');
    input.push([pair[0].trim(), pair[1].trim()]);
});
reader.onInputComplete(function () {    
    console.log(isCyclic(input));
});