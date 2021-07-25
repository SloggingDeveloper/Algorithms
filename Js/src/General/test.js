const readline = require('readline');
const EventEmitter = require('events');
const pow = require('./power');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("press ctrl+c once input is done");

let input = [];

rl.on('line', (data) => {
   
   input.push(Number.parseInt(data));
  if(input.length === 2){
  var eventEmit = new EventEmitter();
  eventEmit.emit('close');
  }
}
).on('close', () => {
  console.log(pow(input[0], input[1]));
});

