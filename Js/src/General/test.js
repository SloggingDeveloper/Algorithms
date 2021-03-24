const readline = require('readline');
const getResult = require('./mergeSortedArrays');

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
  console.log(getResult([[1,8],[2,9],[3,5],[7,11]]));
});
