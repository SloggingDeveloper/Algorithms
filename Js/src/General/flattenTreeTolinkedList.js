(function () {
    'use strict';

    function Tree(root, left, right){
        this.root = root;
        this.left = left;
        this.right= right;
    }

    function LinkedList(value, next){
        this.value = value;
        this.next = next;
    }

    const flatten = function(tree){
      
        if(!tree || typeof tree.root === 'undefined'){
            return null;
        }        
       
        var leftLinked = flatten(tree.left);
        var rightLinked = flatten(tree.right);

        if(leftLinked != null){
         const lastNext = getLastNext(leftLinked);
         lastNext.next = rightLinked;
         return new LinkedList(tree.root, leftLinked);
        }
       
        return new LinkedList(tree.root, rightLinked);

    };
    const getLastNext = function(linked){               
        let next, lastNext;
        lastNext = next = linked;         
         
         while(next){
            lastNext = next; 
            next = next.next;
         }
         return lastNext;
    };

    module.exports = {Tree, flatten};
    
})();