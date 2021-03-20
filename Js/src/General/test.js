const readline = require('readline');
const getMedian = require('./mediaOfSortedArray');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("press ctrl+c once input is done");


let input = [];

rl.on('line', (data) => {
  // TODO: Log the answer in a database
    input.push(Number.parseInt(data));
  }
).on('close',() => {   
    console.log(getMedian([1,2],[2,4,6]));
});
