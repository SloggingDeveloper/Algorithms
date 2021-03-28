const readline = require('readline');
const getResult = require('./minumumsumPath');


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
  console.log(getResult([[1,2,3],[0,1,6],[5,2,1]]));
});

