const readline = require('readline');
const EventEmitter = require('events');
const {LinkedList, generateLinkedList, removeDuplicate} = require('./linkedListDuplicateRemoval');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("press ctrl+c once input is done");

let input = [];

rl.on('line', (data) => {   
   input.push(Number.parseInt(data));   
}
).on('close', () => {
  var linkedList = generateLinkedList(input);
  linkedList.print();
  console.log(removeDuplicate(linkedList).print());
});

