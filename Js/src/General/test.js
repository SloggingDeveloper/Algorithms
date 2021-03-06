const readline = require('readline');
const getLongestCommonPrefix = require('./longestCommonPrefix');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("press ctrl+c once input is done");


let input = [];

rl.on('line', (data) => {
  // TODO: Log the answer in a database
    input.push(data);
  }
).on('close',() => {  
  console.log(input);
    console.log(getLongestCommonPrefix(input));
});
