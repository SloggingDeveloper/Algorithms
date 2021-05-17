const readline = require('readline');
const getResult = require('./binaryTreeSumPath');
const Tree = require('./Tree');
const uniquePermutations = require('./uniquePermutations')

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
).on('close', () => {
  let result = uniquePermutations(input);
  console.log("length",result.length);
  console.log(result);
});