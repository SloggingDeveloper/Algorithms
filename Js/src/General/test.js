const readline = require('readline');
const {getMaxDepth, Tree} = require('./maxDepthOfBinaryTree');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("press ctrl+c once input is done");


let input = '';

rl.on('line', (data) => {
  // TODO: Log the answer in a database
    input = data;
  }
).on('close',() => {  
  var inputData = new Tree(1, new Tree(2, null, new Tree(4, null, null)), new Tree(5, null, null));
  console.log(getMaxDepth(inputData));
});
