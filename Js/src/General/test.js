const readline = require('readline');
const getMaxArea = require('./largestRectangle');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("press ctrl+c once input is done");


let input = [];

rl.on('line', (data) => {
  // TODO: Log the answer in a database
    input = data;
  }
).on('close',() => {  
  console.log(input);
    console.log(getMaxArea([2,1,5,6,2,3]));
});
