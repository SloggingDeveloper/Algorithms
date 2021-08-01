const readline = require('readline');
const EventEmitter = require('events');
const { LinkedList, generateLinkedList, removeDuplicate } = require('./linkedListKeepOnlyUnique');

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
  console.log("current linked list:")
  linkedList.print();
  
  let result = removeDuplicate(linkedList);
  
  console.log("result:")
  if (result && result.constructor.name === LinkedList.name){    
    result.print();
  }
  else
    console.log(null);
});

