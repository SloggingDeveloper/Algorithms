(function(){    
 const Tree = require('./Tree');
 const insertAtRow = function(tree, depth, value){   
   
    if(depth < 1)
     return tree;

     if(depth === 1)
      return new Tree(value, tree, null);

     traverseAndInsert(tree, 1, depth-1, value);
    return tree;
 };

 const traverseAndInsert = function(tree, currentDepth, stopAtDepth, value){   
    
    if(!tree || currentDepth > stopAtDepth)
      return;

    if(currentDepth === stopAtDepth){
        insert(tree, value);
        return;
    }

    traverseAndInsert(tree.left, currentDepth + 1, stopAtDepth, value);
    traverseAndInsert(tree.right, currentDepth + 1, stopAtDepth, value);  
 };
 
 const insert = function(tree, value){

    if(!tree)
    return;
      
    const left = tree.left;
    const right = tree.right;

    tree.left = new Tree(value, left, null);
    tree.right = new Tree(value, null, right);
 };

 module.exports = insertAtRow;
})();