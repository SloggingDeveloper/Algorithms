(function(){
   'use strict';

   function Tree(node, left, right){
     this.node = node;
     this.left = left;
     this.right = right;
   }

const getMaxDepth = function(tree){
    if(!tree)
      return 0;

    var leftTreeDepth = 1 + getMaxDepth(tree.left);
    var rightTreeDepth = 1 + getMaxDepth(tree.right);
    return leftTreeDepth > rightTreeDepth ? leftTreeDepth: rightTreeDepth;
}
module.exports = {getMaxDepth, Tree};
})();