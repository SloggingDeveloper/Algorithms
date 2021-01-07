const readline = require('readline');
const convert = require('./IntegerToRoman');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("press ctrl+c once input is done");


let input = 0;

rl.on('line', (data) => {
  // TODO: Log the answer in a database
 input = data;
}).on('close',() => {
    console.log(convert(input));   
});
