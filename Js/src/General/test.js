const readline = require('readline');
const getResult = require('./minimumWindowSubstring');


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
  console.log(getResult('atrbbamtccba','abc'));
});

