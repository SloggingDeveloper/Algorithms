const readline = require('readline');
const EventEmitter = require('events');
const { LinkedList, generateLinkedList } = require('./linkedListv1');
const remove = require('./removeNthNodeFromEndLinkedList');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("press ctrl+c once input is done");

let input = [];
let count = null;
console.log("enter count:")
rl.on('line', (data) => {
  var parsedData = Number.parseInt(data);
  if (count === null){
    count = parsedData;
    console.log('enter the elements of list');
  }
  else
    input.push(Number.parseInt(data));
}
).on('close', () => {
  var linkedList = generateLinkedList(input);
  console.log("current linked list:")
  linkedList.print();

  let result = remove(linkedList, count);

  console.log("result:")
  if (result && result.constructor.name === LinkedList.name) {
    result.print();
  }
  else
    console.log(null);
});

