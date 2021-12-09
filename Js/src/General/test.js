const readline = require('readline');
const EventEmitter = require('events');
const dictionary = require('./alienDictionary');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("press ctrl+c once input is done");

let input = [];

console.log("enter the string array:")
rl.on('line', (data) => {
    input.push(data);
}
).on('close', () => {
   console.log(dictionary(input));
});

