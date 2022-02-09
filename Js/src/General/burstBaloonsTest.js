const reader = require('./inputReader');
const burst = require('./burstBaloons');

console.log('input tree array');
const input = [];
reader.onReadInput(function(data){
  input.push(Number.parseInt(data));
});
reader.onInputComplete(function(){  
  console.log(burst(input));
});