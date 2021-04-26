const readline = require('readline');
const getResult = require('./binaryTreeSumPath');
const Tree = require('./Tree');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("press ctrl+c once input is done");

let input = [];

rl.on('line', (data) => {
  // TODO: Log the answer in a database
  input.push( data === "null"? null : Number.parseInt(data));
}
).on('close', () => {
   const tree = Tree.create(input);  
   console.log(JSON.stringify(tree));
  console.log(getResult(tree, -6));
});