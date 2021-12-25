const readline = require('readline');
const EventEmitter = require('events');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const onReadInput = function (callback) {
    rl.on('line', callback);
};
const onInputComplete = function (callback) {
    rl.on('close', callback);
};

module.exports = { onReadInput, onInputComplete };