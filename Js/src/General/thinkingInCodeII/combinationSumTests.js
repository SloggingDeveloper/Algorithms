const reader = require('../inputReader');
const findCombination = require('./combinationSumCount');

console.log('first input target and then followed by the array');
const input = [];
let target = null;
reader.onReadInput(function (data) {
    let num = Number.parseInt(data);
    if (target === null)
        target = num;
    else
        input.push(num);
});
reader.onInputComplete(function () {    
    console.log(findCombination(input, target));
});