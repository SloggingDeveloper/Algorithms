const readline = require('readline');
const contains = require('./interleavingStrings');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("press ctrl+c once input is done");


let input = [];

rl.on('line', (data) => {
  // TODO: Log the answer in a database
 input.push(data);
}).on('close',() => {
    console.log(contains(input[0], input[1], input[2]));   
});
