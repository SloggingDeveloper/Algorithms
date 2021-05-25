const readline = require('readline');
const linkedTree = require('./nextRightPointer')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("press ctrl+c once input is done");

let input = [];

rl.on('line', (data) => {
  // TODO: Log the answer in a database
  //input.push(Number.parseInt(data));
}
).on('close', () => {
  let result = linkedTree.formRightPointerTree(linkedTree.generateTest());  
  console.log(JSON.stringify(result));
});

