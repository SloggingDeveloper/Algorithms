(function () {
    'use strict';

    class TreeNext {
        constructor(root, next, left, right) {
            this.root = root;
            this.next = next;
            this.left = left;
            this.right = right;
        }
    }

    const formRightPointerTree = function (tree) {
        const queue = [];

        queue.push(tree);
        construct(queue);
        return tree;
    };

    const construct = function (queue) {

        if (queue.length === 0)
            return;

        let currentLevelNodes = queue.length;

        let previous = null;
        let lasNode = null;
        while (currentLevelNodes > 0) {
            lasNode = queue.shift();
            currentLevelNodes--;   
            if (!lasNode)
                continue;         
                  

            queue.push(!lasNode.left ? null : lasNode.left);
            queue.push(!lasNode.right ? null : lasNode.right); 
            
            if(previous === null){
                previous = lasNode;
            }
            else{
            previous.next = lasNode;
            previous = lasNode;
            }         
        }

        if(previous !== null)
          previous.next = null;

        construct(queue);
    };

    const generateTest = function(){
      let data = new TreeNext(1, null,
         new TreeNext(2,null,new TreeNext(3, null, null, null),new TreeNext(4, null, null, null)),
         new TreeNext(5, null, new TreeNext(6, null, null, null), new TreeNext(7, null, null, null)) 
      );
      return data;
    };

    module.exports = { TreeNext, formRightPointerTree, generateTest };
})();