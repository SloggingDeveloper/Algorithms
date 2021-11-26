const readline = require('readline');
const EventEmitter = require('events');
const Tree = require('./Tree');
const insertAtRow = require('./insertRowInTree');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("press ctrl+c once input is done");

let input = [];
let depth = null;
let value = null;
console.log("enter depth at which row needs to be inserted:")
rl.on('line', (data) => {
  var parsedData = Number.parseInt(data);
  if (depth === null){
    depth = parsedData;
    console.log('enter the value to be inserted:');
    return;
  }
  
  if(value === null){
    value = parsedData;
    console.log('enter the tree:');
    return;
  }
  
  if(data === 'null')
   {
     input.push(null);
     return;
   }
    input.push(data);
}
).on('close', () => {
  const tree = Tree.create(input);
  console.log("current linked list:")
  console.log(JSON.stringify(tree));

  const result = insertAtRow(tree,depth, value);
  console.log(JSON.stringify(result));  
});

