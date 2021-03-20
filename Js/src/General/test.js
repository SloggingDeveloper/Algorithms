const readline = require('readline');
<<<<<<< HEAD
const getMedian = require('./mediaOfSortedArray');
=======
const getResult = require('./maxSubarray');
>>>>>>> 5a788ee8dbcdaedf7b2a6d52748f55181bb12350

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
    console.log(getMedian([1,2],[2,4,6])) } );
