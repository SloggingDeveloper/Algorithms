const reader = require('./inputReader');
const traverse = require('./verticalTreeOrder');
const tree = require('./Tree');

console.log('input tree array');
const input = [];
reader.onReadInput(function(data){
  input.push(data);
});
reader.onInputComplete(function(){  
  console.log(traverse(tree.create(input)));
});