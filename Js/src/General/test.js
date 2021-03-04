const readline = require('readline');
const getCombinations = require('./phoneNumber');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("press ctrl+c once input is done");


let input = '23';

rl.on('line', (data) => {
  // TODO: Log the answer in a database
    input = data;
  }
).on('close',() => {  
  console.log(input);
    console.log(getCombinations(input));
});
