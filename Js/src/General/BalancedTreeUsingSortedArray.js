(function(){
'use strict';

function FormTree(sortedArr){
   return getTree(sortedArr);
};

let getTree = function(sortedArr){

    if(!sortedArr || sortedArr.length === 0)
     return null;
    if(sortedArr.length === 1)
      return new Node(sortedArr[0], null, null);

     let rootIndex = Math.ceil(sortedArr.length/2.0);

     return new Node(sortedArr[rootIndex-1], getTree(sortedArr.slice(0, rootIndex-1)), getTree(sortedArr.slice(rootIndex, sortedArr.length)));
}

class Node{
    constructor(value, leftNode, rightNode){
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
}

module.exports = FormTree;
})();