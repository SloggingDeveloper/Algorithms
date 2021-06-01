const readline = require('readline');
const linkedTree = require('./nextRightPointer')
const linkedTreeII = require('./nextRightTreeII')

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
  let testdata = linkedTree.generateTestIII();
 // console.log(JSON.stringify(testdata));
  let result = linkedTreeII(testdata);  
  console.log(JSON.stringify(linkedTree.printResult(result)));
});

