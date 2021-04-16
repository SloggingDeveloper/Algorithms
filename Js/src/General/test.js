const readline = require('readline');
const getResult = require('./partitionLinkedList');
const LinkedList = require('./linkedList');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("press ctrl+c once input is done");

let input = new LinkedList();

rl.on('line', (data) => {
  // TODO: Log the answer in a database
  input.push(Number.parseInt(data));
}
).on('close', () => {
  console.log(JSON.stringify(getResult(input.list, 6)));
});