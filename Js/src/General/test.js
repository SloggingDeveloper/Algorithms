const readline = require('readline');
const rotate = require('./rotateMatrix');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("press ctrl+c once input is done");


let input = [];

rl.on('line', (data) => {
  // TODO: Log the answer in a database
 input.push(data.split(' '));
}).on('close',() => {  
    console.log(rotate(input));   
});
