const reader = require('./inputReader');
const findNearest = require('./binaryTreeFindNearest');
const Tree = require('./Tree');

console.log('input tree array');
const input = [];
reader.onReadInput(function(data){
  input.push(Number.parseInt(data));
});
reader.onInputComplete(function(){  
  let tree = Tree.create(input);
  console.log(findNearest(tree, 14));
});